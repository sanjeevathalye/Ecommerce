import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore, private as: AuthService) { }

  addToCart(product) {
    return this.afs.collection(`users/${this.as.userId}/cart`).add(product);
  }

  getFromCart() {
    return this.afs.collection(`users/${this.as.userId}/cart`).snapshotChanges();
  }

  removeFromCart(id: string) {
    return this.afs.doc(`users/${this.as.userId}/cart/${id}`).delete();
  }
}

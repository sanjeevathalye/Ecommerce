import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private afs: AngularFirestore) { }

  getAllProducts() {
    return this.afs.collection('Products').valueChanges();
  }
}

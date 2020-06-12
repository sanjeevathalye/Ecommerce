import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  addNewUser(id: string, name: string, email: string, address: string) {
    return this.afs.doc('users/' + id).set(
      {
        Name: name,
        Email: email,
        Address: address
      });
  }
}

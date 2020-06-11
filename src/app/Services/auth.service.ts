import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  signup (email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User> ;

  constructor(private afa: AngularFireAuth) { 
    this.user = afa.user;
  }

  signup (email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afa.signOut();
  }
}

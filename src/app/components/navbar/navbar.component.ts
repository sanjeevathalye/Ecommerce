import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = false;
  isUserLoggedIn = false;

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.as.user.subscribe( user =>
      {
        if(user) {
          this.isUserLoggedIn = true;
          this.as.userId = user.uid;
        }
        else { 
          this.isUserLoggedIn = false;
          this.as.userId = '' ;
        }
      });
  }

  toggleNavBar() {
    this.isOpen = !this.isOpen ;
  }

  logout() {
    this.router.navigateByUrl('/logout')
    this.as.logout();
  }

}

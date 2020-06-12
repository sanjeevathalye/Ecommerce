import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = false;

  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }

  toggleNavBar() {
    this.isOpen = !this.isOpen ;
  }

  logout() {
    this.as.logout();
  }

}

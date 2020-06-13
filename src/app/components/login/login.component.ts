import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.as.login(form.value.email, form.value.password)
    .then( data => {
     this.router.navigateByUrl('/')
    })
    .catch(err => console.log(err));
  }
}

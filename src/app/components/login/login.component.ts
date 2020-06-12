import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.as.login(form.value.email, form.value.password)
    .then( data => console.log(data))
    .catch(err => console.log(err));
  }
}

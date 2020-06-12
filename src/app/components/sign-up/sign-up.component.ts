import { UserService } from './../../Services/user.service';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMsg: string = '' ;

  constructor(private as: AuthService, private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(form: NgForm) {
    this.as.signup(form.value.email, form.value.password)
      .then(data => {
        this.errorMsg = '';
        this.us.addNewUser(data.user.uid, form.value.name, form.value.email, form.value.address);
        this.router.navigateByUrl('/login');
      })
      .catch(err => this.errorMsg = err)
  }

}

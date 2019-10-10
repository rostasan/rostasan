import { Component, OnInit } from '@angular/core';

import { User } from './auth-form/auth-form.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {  } from '@angular/fire';


import { User } from 'models/user';
import { Store } from 'store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginComponent {
  // https://angularfirebase.com/lessons/angular-firebase-authentication-tutorial-oauth/


  constructor(

    private router: Router,
    private store: Store,
  ) {

   }



}

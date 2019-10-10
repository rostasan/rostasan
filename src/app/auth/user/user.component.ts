import { Component, OnInit } from '@angular/core';
import { Roles } from 'models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email: string;
  photoURL: string;
  roles: Roles;

  constructor() { }

  ngOnInit() {

  }

}

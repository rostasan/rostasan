import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'app-authform',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    onSubmit(value: User) {
      this.submitted.emit(value);
    }

  constructor() { }

  ngOnInit() {
  }

}

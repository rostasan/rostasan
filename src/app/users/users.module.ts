import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MembersComponent, SignupComponent, EmailComponent, LoginComponent],
  exports: [MembersComponent, SignupComponent, EmailComponent, LoginComponent]
})
export class UsersModule { }

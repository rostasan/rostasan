import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
      // { path: 'login', loadChildren: () => LoginModule },
      // { path: 'register', loadChildren: () => RegisterModule }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RegisterModule,
    LoginModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserComponent]
})
export class AuthModule { }

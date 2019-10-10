import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { AuthFormComponent } from './auth-form/auth-form.component';

// services
import { AuthService } from './services/auth/auth.service';

// guards


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthFormComponent,

  ],
  exports: [
    AuthFormComponent
  ]
})
export class SharedLoginModule {
  // to avoid duplicating the auth service used by Login and Register
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedLoginModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    };
  }
 }

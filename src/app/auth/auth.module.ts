import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthGuard } from './guards/AuthGuard';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'auth', component: AuthComponent, canActivate: [AuthGuard], children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegistrationComponent }
        ]
      }
    ])
  ]
})
export class AuthModule { }

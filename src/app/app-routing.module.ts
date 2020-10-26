import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/authentication/auth/auth.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { BoardComponent } from './modules/board/components/board/board.component';
import { BoardOverviewComponent } from './modules/boardOverview/components/board-overview/board-overview.component';

import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuard } from './shared/guards/AuthGuard';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, canActivate: [AuthGuard], children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent }
    ]
  },

  { path: '', redirectTo: 'main/overview', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [
      { path: 'overview', component: BoardOverviewComponent },
      { path: 'board/:id', component: BoardComponent }
    ]
  },
  { path: '**', redirectTo: 'main/overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

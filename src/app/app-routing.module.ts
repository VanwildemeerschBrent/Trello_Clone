import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './modules/board/components/board/board.component';
import { BoardOverviewComponent } from './modules/boardOverview/components/board-overview/board-overview.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
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

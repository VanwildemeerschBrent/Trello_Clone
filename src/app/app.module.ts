import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardOverviewComponent } from './modules/boardOverview/components/board-overview/board-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CreateBoardPopupComponent } from './modules/boardOverview/components/createBoardPopup/createBoardPopup.component';
import { BoardComponent } from './modules/board/components/board/board.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { AuthComponent } from './modules/authentication/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BoardOverviewComponent,
    CreateBoardPopupComponent,
    BoardComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

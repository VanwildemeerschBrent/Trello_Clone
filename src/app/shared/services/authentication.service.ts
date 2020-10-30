import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { tap } from 'rxjs/operators'
import { Tokens } from '../models/tokens.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = 'https://trello-clone-api-bv.herokuapp.com/';
  // private API_URL = 'http://localhost:3000/';

  private readonly JWT_TOKEN: string = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN: string = 'REFRESH_TOKEN';


  public currentUser: Observable<User>;
  private loggedInUser: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(`${this.API_URL}auth/login`, { email, password })
      .pipe(tap(tokens => this.doLoginUser(email, tokens)));
  }

  logout(): void {
    this.clearTokens();
  }

  isLoggedIn(): boolean {
    return !!this.getJWTToken();
  }

  clearTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


  getJWTToken(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }



  private doLoginUser(userEmail: string, tokens: Tokens): void {
    this.loggedInUser = userEmail;
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: Tokens): void {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);

  }
}


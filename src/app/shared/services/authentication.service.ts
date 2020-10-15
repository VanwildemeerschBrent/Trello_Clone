import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // private API_URL = 'https://trello-clone-api-bv.herokuapp.com/';
  private API_URL = 'http://localhost:3000/';

  public currentUser: Observable<User>;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(`${this.API_URL}auth/login`, { email, password })
      .pipe(map(user => {
        if (user && user.token) {

        }

        return user;
      }));
  }


}


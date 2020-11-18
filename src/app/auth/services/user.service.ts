import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'https://trello-clone-api-bv.herokuapp.com/';
  // private API_URL = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL + 'auth/register', user);
  }

}

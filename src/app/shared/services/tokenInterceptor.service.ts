import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req, next): Observable<any> {

    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationService.getJWTToken()}`
      }
    });

    return next.handle(tokenizedRequest);
  }

}

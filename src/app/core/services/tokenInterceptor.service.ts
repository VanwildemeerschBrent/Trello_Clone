import { HttpErrorResponse, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../../auth/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  intercept(req, next): Observable<any> {

    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationService.getJWTToken()}`
      }
    });

    return next.handle(tokenizedRequest).pipe(tap(() => { }, (err: any) => {

      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
          console.error('Status !== 401')
          return;
        }
        this.authenticationService.logout();
        this.router.navigate(['/auth/login']).catch((error) => console.warn('Error', error));
      }
    }));
  }

}

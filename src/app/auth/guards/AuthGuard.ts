import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(): any {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('');
        }
        return !this.authService.isLoggedIn();
    }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {

    constructor(private authService: AuthService, private router: Router) { }


    canLoad(route: Route, segments: UrlSegment[]) {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }

}

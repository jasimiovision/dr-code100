import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const authData = this.authService.getAuthData();
    const isAuth = this.authService.getIsAuth();

    if (!isAuth) {
      this._router.navigate(['/']);
    }
    return isAuth;
  }

}

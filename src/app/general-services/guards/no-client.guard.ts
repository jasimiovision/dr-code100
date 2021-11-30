import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';

@Injectable()
export class NoClientGuard implements CanActivate {

  constructor(private authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    const authData = this.authService.getAuthData();
    const isClient = authData.role === "client";

    if (isClient) {
      this._router.navigate(['/home']);
    }
    return !isClient;
  }

}

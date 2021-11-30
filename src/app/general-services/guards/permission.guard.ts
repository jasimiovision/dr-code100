import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';
import { AllProjectService } from '../../pages/services/allProject.service';

@Injectable()
export class PermissionGuard implements CanActivate {

  constructor(private authService: AuthService, private allProjectService: AllProjectService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    const authData = this.authService.getAuthData();
    var hasPermission: boolean;
    if(authData.role === "admin"){
      hasPermission = true;
    } else {
      hasPermission = authData.permission.includes(route.params["id"]);
    }

    if (!hasPermission) {
      this._router.navigate(['/home']);
    }
    return hasPermission;
  }

}

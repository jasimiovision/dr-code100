import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private _router: Router) {}

  // modify all request leaving our angular app
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getAuthData()["token"];

    //TODO: Dynamically Fetch ProjectID Based On Current Project
    const extractedURL = this._router.url.split("/");
    const urlLast = extractedURL[extractedURL.length - 1];
    const currentProject = (urlLast.length === 24) ? urlLast : "";

    const authRequest = req.clone({
      headers: req.headers
                .set("Authorization", "Bearer " + authToken)
                .set("ProjectID", currentProject)
    });

    return next.handle(authRequest);
  }
}

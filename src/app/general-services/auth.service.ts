import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Subject } from "rxjs";

import { environment } from "../../environments/environment";
import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService {

  private authData: AuthData = {
    username: "",
    token: "",
    role: "",
    permission: []
  };
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;  // NodeJS.Timer

  constructor(private _router: Router, private http: HttpClient) {}

  getAuthData(){
    return this.authData;
  }
  setAuthData(data){
    this.authData = data
  }

  getIsAuth() {
    if (this.authData["token"] === "") {
      return false;
    } else {
      return true;
    }
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(username: string, password: string) {
    const loginData = {username: username, password: password};
    this.http.post<{token: string, expiresIn: number}>(environment.apiURL + "/auth/login", loginData)
      .subscribe(
      response => {
        const token = response.token;
        if (token) {
          this.parseToken(token, response.expiresIn)
          this._router.navigate(["/home"])
        }
      },
      error => {
        window.alert("Invalid Credentials");
      });
  }

  parseToken(token, expiry){
    const expiresInDuration = expiry;
          this.parseJWT(token);
          this.setAuthTimer(expiresInDuration);
          this.authStatusListener.next(true);

          // stores token and date in localStorage
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthDataStorage(token, expirationDate);
  }

  autoAuthUser() {
    const authInformation = this.getAuthDataStorage();
    if (authInformation) {
      const now = new Date();
      const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
      if (expiresIn > 0) {
        this.parseJWT(authInformation.token);
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
      }
    }
  }

  logout(){
    this.authData = {
      username: "",
      token: "",
      role: "",
      permission: []
    }
    this.authStatusListener.next(false);

    // clear timeout and localStorage
    clearTimeout(this.tokenTimer);
    this.clearAuthDataStorage();

    this._router.navigate(["/"])
  }

  private parseJWT(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    let tokenPayload = JSON.parse(jsonPayload);
    this.authData = {
      username: tokenPayload["username"],
      token: token,
      role: tokenPayload["role"],
      permission: tokenPayload["permission"]
    }
  }

  private setAuthTimer(duration: number) {

    this.tokenTimer = setTimeout(() => {
          if (confirm('Do you want to stay logged in?')) {
  // Save it!
   this.autoAuthUser();
  
} else {
  // Do nothing!
  this.logout();
}
      
    }, duration*3000);//duration*
  }

  private saveAuthDataStorage(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthDataStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAuthDataStorage() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }

    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

}

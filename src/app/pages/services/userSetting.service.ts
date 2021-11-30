import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { userSetting } from './userSetting.model';

@Injectable({providedIn: 'root'})
export class UserSettingService {
  private _userSetting: userSetting[] = [];
  private _userSettingUpdated = new Subject<userSetting[]>();

  constructor(private http: HttpClient, private _router: Router) {}

  getUserSettingUpdateListener() {
    return this._userSettingUpdated.asObservable();
  }

  // This is the entry function for the service
  getAllUserSettingData() {
    this.http.get<{data: any}>(environment.apiURL + "/auth/user-info")
    .pipe(map((resData) => {
      return resData.data.map(userData => {
        return {
          username: userData.username,
          role: userData.role,
          permission: userData.permission
        }
      })
    }))
    .subscribe((transformedUserData) => {
      this._userSetting = transformedUserData;
      this._userSettingUpdated.next([...this._userSetting]);
    })
  }

  addUserSetting(username: string, password: string, role: string){
    const newUser = {
      username: username,
      password: password,
      role: role,
      permission: []
    }
    this.http.post<{message: string, result: any}>(environment.apiURL + "/auth/register-user", newUser)
    .subscribe(
      (resData) => {
        this._userSetting.push(newUser);
        this._userSettingUpdated.next([...this._userSetting]);
      },
      (err: any) => {
        window.alert("Can't add user! New user shouldn't have the same username as old users!")
      })
  }

  deleteUserSetting(username: string){
    const oneUser = this._userSetting.find(user => user.username === username).username;
    const deleteConfirmed = confirm("Are you sure you want to delete " + oneUser + " ?")
    if (deleteConfirmed){
      this.http.delete<{message: string}>(environment.apiURL + "/auth/delete-user/" + username)
      .subscribe(
        (resData) => {
          this._userSetting = this._userSetting.filter(user => user.username !== username);
          this._userSettingUpdated.next([...this._userSetting]);
          window.alert("User deleted successfully");
        },
        (_) => {
          window.alert("Fail to Delete User");
        }
      )
    }
  }

  updateUserSetting(username: string, newPermission: string[]){
    this.http.put<{message: string}>(environment.apiURL + "/auth/set-permission/" + username, {permission: newPermission})
      .subscribe(
      (resData) => {
        window.alert(resData.message);
      },
      (_) => {
        window.alert("Fail to Update Permission");
      })
  }

}

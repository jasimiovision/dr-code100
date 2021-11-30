import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { userSetting } from '../../services/userSetting.model';
import { allProject } from "../../services/allProject.model";
import { UserSettingService } from '../../services/userSetting.service';
import { AllProjectService } from '../../services/allProject.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public something: any;  // to enable extraction of NgForm value

  public allProjects: allProject[];
  public allUsers: userSetting[] = [];

  private _userSettingSub: Subscription;
  private _allProjectSub: Subscription;

  constructor(private userSettingService: UserSettingService, private allProjectService: AllProjectService) { }

  ngOnInit(): void {

    // Get List of All Projects
    this._allProjectSub = this.allProjectService.getAllProjectUpdateListener()
      .subscribe((data: allProject[]) => {
        this.allProjects = data;
      });
    this.allProjectService.getAllProjectData("admin", []);

    // Get List of All Users
    this._userSettingSub = this.userSettingService.getUserSettingUpdateListener()
      .subscribe((data: userSetting[]) => {
        this.allUsers = data;
        console.log(this.allUsers);
      });
    this.userSettingService.getAllUserSettingData();
  }

  updateUserPermission(username: string){
    const selectedUser = this.allUsers.filter(user => user.username === username);
    this.userSettingService.updateUserSetting(username, selectedUser[0]["permission"]);
  }

  createNewUser(form: NgForm){
    this.userSettingService.addUserSetting(form.value.newUsername, form.value.newPassword, form.value.newRole);
    form.resetForm();
  }

  deleteUser(username: string){
    this.userSettingService.deleteUserSetting(username);
  }

}

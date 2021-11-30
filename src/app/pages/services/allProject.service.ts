import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { environment } from '../../../environments/environment';
import { allProject } from './allProject.model';
import { GlobalService } from '../../general-services/global.service'
import { AuthService } from '../../general-services/auth.service'
import { UserSettingService } from './userSetting.service'

@Injectable({providedIn: 'root'})
export class AllProjectService {
  private _allProject: allProject[] = [];
  private _allProjectUpdated = new Subject<allProject[]>();
  private _projectUpdated = new Subject<allProject>();

  constructor(private http: HttpClient, 
              private _router: Router, 
              private _as: AuthService,
              private _uss: UserSettingService,
              public gs: GlobalService
              ) {}

  getAllProjectUpdateListener=()=>this._allProjectUpdated.asObservable();
  getProjectUpdateListener=()=>this._projectUpdated.asObservable();
  getAllProjectIds=()=>this._allProject.map(el => { return el.id });

  getProjectData(projId:string){
    this.http.get<{data:any}>(environment.apiURL + "/project/" + projId)
    .pipe(map((res) => {
      return {
            id: res.data._id,
            name: res.data.project_name,
            created: new Date(res.data.date_created),
            type: res.data.project_type
          }
    }))
    .subscribe((processedProject) => {
      this._projectUpdated.next(processedProject)
    })
  }

  // This is the entry function for the service
  getAllProjectData(role: string, permission: string[]) {
    this.http.get<{message: string, data: any}>(environment.apiURL + "/project/all")
    .pipe(map((resData) => {
      let transformedOutput = resData.data.map(projectMetadata => {
          return {
            id: projectMetadata._id,
            name: projectMetadata.project_name,
            created: new Date(projectMetadata.date_created),
            type: projectMetadata.project_type
          }
      })
      if (role !== "admin") {
        transformedOutput = transformedOutput.filter(project => permission.includes(project.id))
      }
      return transformedOutput;
    }))
    .subscribe(
    (transformedAllProject) => {
      this._allProject = transformedAllProject;
      console.log("getAllProjectData: ", transformedAllProject)
      this._allProjectUpdated.next([...this._allProject]);
    },
    (error) => {
      this._router.navigate(["/home"])
    })
  }

  addProjectEntry(configForm){
    const userAuthData = this._as.getAuthData()
    for (let key in userAuthData) {
      configForm.append(key, userAuthData[key])
    } 
    const createConfirmed = confirm("Are you sure about the project config?");
    if(createConfirmed){
      this.http.post<{message: string, project: any, report: any, floorplan:any, token:any, expiresIn:string}>(environment.apiURL + "/project", configForm)
      .subscribe(
      (resData) => {
        this.gs.loaded()
        alert("Project Created Successfully");
        this._as.parseToken(resData.token, resData.expiresIn)
        /// navigate to report-config page
        const projId = resData.project._id
        this._router.navigate(['/home']);
      },
      (error) => {
        alert("Fail to create project, Please review your settings!\nCannot create project with the same name");
      })
    }
  }

  addReportProjectEntry(projName){
    // embed proj name in body and http post
    const userAuthData = this._as.getAuthData()
    const body = { project_name: projName, ...userAuthData};
    console.log(body)
    this.http.post<{message: string, project: any, report: any, token:any, expiresIn:string}>(environment.apiURL + "/project/report", body)
      .subscribe(
      (resData) => {
        console.log(resData)
        this.gs.loaded()
        window.alert(`${projName} Created Successfully`);
        this._as.parseToken(resData.token, resData.expiresIn)
        /// navigate to report-config page
        const projId = resData.project._id
        this._router.navigate(['/report-config', projId]);
      },
      (error) => {
        alert(`Project name ${projName} already exists!`);
      })    
  }


  deleteProjectEntry(projectName:string, id: string){
    this.http.delete<{message: string}>(environment.apiURL + "/project/" + id)
    .subscribe((resData) => {
      this._allProject = this._allProject.filter(projectEntry => projectEntry.id !== id);
      this._allProjectUpdated.next([...this._allProject]);
      alert(projectName + " deleted successfully");
    },
    (errData) => {
      alert("Fail to delete project " + projectName);
    })
  }

  checkProjectOutputLoadedStatus(id: string){
    this.http.get<{message: string}>(environment.apiURL + "/project/check-loaded/" + id)
    .subscribe((resData) => {
      this._router.navigate(["/report-config", id])
    })
  }

}

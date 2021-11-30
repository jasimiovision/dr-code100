import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../general-services/auth.service';


@Injectable({providedIn: 'root'})
export class EditService {
    // Subjects and observable getter methods
    private _floorplanDataUpdated = new Subject<any[]>();
    private _keyframeDataUpdated = new Subject<any[]>();
    private _defectDataUpdated = new Subject<any[]>();
    private _defectDatahistory = new Subject<any[]>();
    public username: string;
    public edithistory;
    constructor(private http: HttpClient, public authService: AuthService) {}

    getFloorplanDataUpdateListener() { return this._floorplanDataUpdated.asObservable()}
    getKeyframeDataUpdateListener() { return this._keyframeDataUpdated.asObservable()}
    getDefectDataUpdateListener() { return this._defectDataUpdated.asObservable()}
    getDefectDataUpdatehistory() { return this._defectDatahistory.asObservable()}

    getDefects(keyframeId){
        this.http.get<{data:any[]}>(environment.apiURL + "/defect/keyframe/" + keyframeId)
        .pipe(map((res) => {
            return res.data.map(df => {
              return {
                ...df,
                id: df._id
              }
            })
          }))
        .subscribe((processedDefects) => {
            console.log("getDefects: ", processedDefects)
            this._defectDataUpdated.next(processedDefects);
        })
    }
    verifyDefects(defects,keyframeId){
    this.username = this.authService.getAuthData()["username"];
        const body = { defects: defects,username: this.username }
        this.http.put<any>(environment.apiURL + "/keyframe/verify/" + keyframeId, body)
        .subscribe(res => {
            console.log("verifyDefects: ", res)
        })
    }
    //test edit history
     checkedithistory(keyframeId){
       
        return this.http.get<{data:any[]}>(environment.apiURL + "/keyframe/verify/eidthistory/" + keyframeId).pipe(map((resData) => {
      let transformedOutput = resData.data.map(projectMetadata => {
     
          return {

            id: projectMetadata._id,
            created: new Date(projectMetadata.edit_at).toLocaleString("en-US", {timeZone: "Asia/Singapore"}),
            name: projectMetadata.username,
           
          }
      })
        return transformedOutput;
    }))

           }
    //end test history
    getKeyframes(projectId){
        this.http.get<{data:any[]}>(environment.apiURL + "/keyframe/all/project/" + projectId)
        .pipe(map((res) => {
            return res.data.map(kf => {
              return {
                ...kf,
                id: kf._id
              }
            })
          }))
        .subscribe((processedKeyframes) => {
            console.log("getKeyframes: ", processedKeyframes)
            this._keyframeDataUpdated.next(processedKeyframes);
        })
    }
    getFloorplans(projectId){
        this.http.get<{data:any[]}>(environment.apiURL + "/floorplan/project/" + projectId)
        .pipe(map((res) => {
            return res.data.map(fp => {
              return {
                ...fp,
                id: fp._id
              }
            })
          }))
        .subscribe((processedFloorplans) => {
            console.log("getFloorplans: ", processedFloorplans)
            this._floorplanDataUpdated.next(processedFloorplans);
        })
    }
    
}

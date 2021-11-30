import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({providedIn: 'root'})
export class FloorplanService {
    
    loadFloorplanComponentListener = new Subject();
    private _allFloorplansDataUpdated = new Subject<any[]>();
    private _floorplanDataUpdated = new Subject<any[]>();
    private _keyframeDataUpdated = new Subject<any>();
    private _defectDataUpdated = new Subject<any[]>();

    constructor(private http: HttpClient) {}
    
    getAllFloorplanDataUpdateListener() { return this._allFloorplansDataUpdated.asObservable()}
    getFloorplanDataUpdateListener() { return this._floorplanDataUpdated.asObservable()}
    getKeyframeDataUpdateListener() { return this._keyframeDataUpdated.asObservable()}
    getDefectDataUpdateListener() { return this._defectDataUpdated.asObservable()}
    getLoadFloorplanComponentListener(){ return this.loadFloorplanComponentListener.asObservable() }

    loadFloorplanComponent(){ // called by visualisation component when floorplan selected.
        this.loadFloorplanComponentListener.next({})
    }
    getFloorplan(floorplanId){
        this.http.get<{data:any}>(environment.apiURL + "/floorplan/" + floorplanId)
        .pipe(map((res) => {
            return {
                ... res.data,
                id: res.data._id
            }
          }))
        .subscribe((processedFloorplan) => {
            console.log("getFloorplan: ", processedFloorplan)
            this._floorplanDataUpdated.next(processedFloorplan);
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
            this._allFloorplansDataUpdated.next(processedFloorplans);
        })
    }
    getKeyframe(keyframeId){
        this.http.get<{data:any}>(environment.apiURL + "/keyframe/" + keyframeId)
        .pipe(map((res) => {
            return {...res.data, id:res.data._id}
          }))
        .subscribe((processedKeyframe) => {
            console.log("getKeyframes: ", processedKeyframe)
            this._keyframeDataUpdated.next(processedKeyframe);
        })
    }
    getDefects(floorplanId){
        this.http.get<{data:any[]}>(environment.apiURL + "/defect/floorplan/" + floorplanId)
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
 
    saveDefects(defects, floorplan_id){ // save defect coordinates
        const body = { defects: defects }
        this.http.put<any>(environment.apiURL + "/defect/all/" + floorplan_id, body)
        .subscribe(res => {
            console.log("saveDefects: ", res)
        })
    }

    saveDefect(defect){ // save defect property
        const body = { ...defect }
        this.http.put<any>(environment.apiURL + "/defect/" + defect.id, body)
        .subscribe(res => {
            console.log("saveDefect: ", res)
        })
    }
    deleteDefect(defect){
        this.http.delete<any>(environment.apiURL + "/defect/" + defect.id)
        .subscribe(res => {
            console.log("deleteDefect: ", res)
        })
    }
    // addDefect(defect){
    // }
}

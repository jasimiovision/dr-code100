import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { GlobalService } from 'src/app/general-services/global.service';
import { FloorplanService } from '../../services/floorplan.service'
import { AuthService } from 'src/app/general-services/auth.service';
import { floorplanData } from '../../services/floorplanData.model';
import { keyframeData } from '../../services/keyframeData.model';

const imagePlaceholderUrl = "../../../../../assets/placeholder.png"

@Component({
  selector: 'app-visualization-page',
  templateUrl: './visualization-page.component.html',
  styleUrls: ['./visualization-page.component.scss']
})
export class VisualizationPageComponent implements OnInit {
  @ViewChild('defectKeyframe', { static: true }) defectKeyframe: ElementRef<HTMLImageElement>;
  clientMode: boolean;
  lockDefects = true
  editing = true;
  projectId;
  floorplans;
  selectedFloorplanId = "";
  selectedDefect;
  private defectPlaceholder = {
      id: "",
      floorplan_id: "",
      keyframe_id: "",
      position_coordinates: [],
      defect_type: "",
      defect_comment: ""
  };

  //Subscribers
  private _floorplanDataSub
  private _keyframeDataSub

  constructor(public fs: FloorplanService, 
              public route: ActivatedRoute,
              private router: Router, 
              private authService: AuthService,
              public gs: GlobalService) { }

  ngOnInit(): void {
    this.gs.load()
    const role = this.authService.getAuthData()["role"];
    this.clientMode = (role === "client") ? true : false;
    this.selectDefect(this.defectPlaceholder)
    ////////////////////////////////
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.projectId = paramMap.get("id")
      // fetch floorplans
      this.fs.getFloorplans(this.projectId)
    }) 
    ////////////////////////////////
    // Observables to get data
    // only triggered once at the start

    this._floorplanDataSub = this.fs.getAllFloorplanDataUpdateListener()
      .subscribe((data: floorplanData[]) => {
     
        if (this.selectedFloorplanId==""){

          this.floorplans = data // for floorplan thumbnail display - Observable for async pipe
          this.selectedFloorplanId = data[0].id // select first floorplan by default
          this.fs.loadFloorplanComponent()
          this.gs.loaded()
          
        }
      });
    this._keyframeDataSub = this.fs.getKeyframeDataUpdateListener()
      .subscribe((data: keyframeData) => {
        const url = this.selectedDefect.keyframe_id=="" ? imagePlaceholderUrl : data.filename
        this.defectKeyframe.nativeElement.src = url
      });
  
  }

  toggleLock(){
    this.lockDefects = !this.lockDefects;
  }
  selectDefect(defect){
    this.selectedDefect = defect
    if(defect.id ==""){
      this.defectKeyframe.nativeElement.src = imagePlaceholderUrl
    }else{
      this.fs.getKeyframe(defect.keyframe_id)
    }
  }
  selectFloorplan(id){

    this.selectedFloorplanId = id;
    this.lockDefects = true;
    setTimeout(() => { // set timeout to prevent race condition of updating selectedFloorplanId of floorplan(child) component
			this.fs.loadFloorplanComponent()
		})
  }
  onEdit(){
    this.editing = true;
  }
  onSave(){
    this.editing = false;
    this.fs.saveDefect(this.selectedDefect)
  }

}

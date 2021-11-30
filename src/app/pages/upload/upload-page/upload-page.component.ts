import { Component, OnInit, ViewChild,  ElementRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResizedEvent } from 'angular-resize-event';

import { AllProjectService } from "../../services/allProject.service";
import { GlobalService } from '../../../general-services/global.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  isLinear: boolean = true;
  isSettingMode: boolean;
  isNotImage: boolean = false;
  imagePreview: string;
  secondPageTriggered: boolean = false;

  // Pairing Display
  pairingDisplay: string[];
  projectSettingForm: FormGroup;
  localizationConfig: any = {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    x_start_coord: [],
    y_start_coord: []
  }

  // Flooorplan Setting Variables
  @ViewChild('uploadedFloorplan', { static: true }) uploadedFloorplan: ElementRef<HTMLImageElement>;
  uploadedFloorplanHeight;
  uploadedFloorplanWidth;
  floorplanValue: any = {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    start_coord: []
  }

  constructor(private _formBuilder: FormBuilder, 
              private allProjectService: AllProjectService,
              private _gs: GlobalService
              ) { }

  ngOnInit(): void {

    this.projectSettingForm = this._formBuilder.group({
      projectName: ['', Validators.required],
      videoFilenames: ['', Validators.required],
      flightlogFilenames: ['', Validators.required],
      floorplanImage: ['', Validators.required],
      tankHeight: ['', Validators.required],
      tankCircumference: ['', Validators.required],
    });
  }

  updatePairingDisplay() {
    const videoDisplay = this.projectSettingForm.value.videoFilenames.split(",");
    const flightlogDisplay = this.projectSettingForm.value.flightlogFilenames.split(",");

    const length = Math.max(videoDisplay.length, flightlogDisplay.length);

    this.pairingDisplay = [];
    for( let i = 0; i < length; i++){
      let newPairing = ((i < videoDisplay.length) ? videoDisplay[i] : "") + " & " + ((i < flightlogDisplay.length) ? flightlogDisplay[i] : "");
      this.pairingDisplay.push(newPairing);
    }
  }

  onImagePicked(imageInput: any){
    const file: File = imageInput.files[0];

    if(!file){
      this.imagePreview = '';
      return
    }

    var fileType = file.type.split("/")[0];
    if (fileType !== "image"){
      this.isNotImage = true;
      return
    } else {
      this.isNotImage = false;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

    this.projectSettingForm.patchValue({floorplanImage: file});
    this.projectSettingForm.get('floorplanImage').updateValueAndValidity();
    console.log(this.projectSettingForm.value);
  }

  onProjectSettingDone(){
    if(!this.secondPageTriggered){
      this.secondPageTriggered = true;
      // dynamically expand array based on inputs
      for(let i=0; i < this.pairingDisplay.length; i++){
        this.floorplanValue.start_coord.push({id: i, x: 0, y: 0});
      }
      this.loadFloorplanImageData();
    }
  }

  ////////////////////////////////////////////
  /////////      SVG Functions      /////////

  loadFloorplanImageData(){
    // get image size
    this.uploadedFloorplan.nativeElement.onload = () => {
      this.uploadedFloorplanHeight = this.uploadedFloorplan.nativeElement.height;
      this.uploadedFloorplanWidth = this.uploadedFloorplan.nativeElement.width;

      // initialize points
      for(let i=0; i < this.pairingDisplay.length; i++){
        const interval = 1.0 / (this.pairingDisplay.length + 1);
        this.localizationConfig.x_start_coord.push(interval*(i+1));
        this.localizationConfig.y_start_coord.push(0.500);
      }

      // initialize sliders
      this.localizationConfig.bottom = 0.95;
      this.localizationConfig.top = 0.05;
      this.localizationConfig.left = 0.05;
      this.localizationConfig.right = 0.95;
    }
    // fetch floorplan image url and load
    this.uploadedFloorplan.nativeElement.src = this.imagePreview;
  }

  onResized(event: ResizedEvent) {
    this.uploadedFloorplanWidth = event.newWidth;
    this.uploadedFloorplanHeight = event.newHeight;

    // redisplay starting coordinates
    for(let i=0; i<this.floorplanValue.start_coord.length; i++){
      const unormalised = this.unnormaliseDefectPosition(this.localizationConfig.x_start_coord[i],
                                                         this.localizationConfig.y_start_coord[i])
      this.floorplanValue.start_coord[i] = {id: i, x: unormalised.x, y: unormalised.y}
    }

    // redisplay slider coordinates
    const bottom_unorm = this.unnormaliseDefectPosition(0, this.localizationConfig.bottom);
    this.floorplanValue.bottom = {x: 0, y: bottom_unorm.y}
    const left_unorm = this.unnormaliseDefectPosition(this.localizationConfig.left, 0);
    this.floorplanValue.left = {x: left_unorm.x, y: 0}
    const top_unorm = this.unnormaliseDefectPosition(0, this.localizationConfig.top);
    this.floorplanValue.top = {x: 0, y: top_unorm.y}
    const right_unorm = this.unnormaliseDefectPosition(this.localizationConfig.right, 0);
    this.floorplanValue.right = {x: right_unorm.x, y: 0}

  }

  positionChanged(start_coord, event: CdkDragEnd) {
    const coordIdx = this.floorplanValue.start_coord.findIndex((obj => obj.id == start_coord.id));

    // update floorplan value
    this.floorplanValue.start_coord[coordIdx] = {id: start_coord.id,
                                                 x: event.source.getFreeDragPosition().x,
                                                 y: event.source.getFreeDragPosition().y}

    // update normalised value
    const normalised = this.normaliseDefectPosition(event.source.getFreeDragPosition().x,
                                                    event.source.getFreeDragPosition().y)
    this.localizationConfig.x_start_coord[coordIdx] = normalised.x;
    this.localizationConfig.y_start_coord[coordIdx] = normalised.y;
  }

  sliderChanged(slider: string, event: CdkDragEnd) {
    const normalised = this.normaliseDefectPosition(event.source.getFreeDragPosition().x,
                                                    event.source.getFreeDragPosition().y)
    if(slider === 'bottom'){
      this.floorplanValue.bottom = {x: event.source.getFreeDragPosition().x,
                                   y: event.source.getFreeDragPosition().y}
      this.localizationConfig.bottom = Math.min(normalised.y, 1);
    } else if (slider === 'left'){
      this.floorplanValue.left = {x: event.source.getFreeDragPosition().x,
                                   y: event.source.getFreeDragPosition().y}
      this.localizationConfig.left = Math.max(normalised.x, 0);
    } else if (slider === 'top'){
      this.floorplanValue.top = {x: event.source.getFreeDragPosition().x,
                                   y: event.source.getFreeDragPosition().y}
      this.localizationConfig.top = Math.max(normalised.y, 0);
    } else if (slider === 'right'){
      this.floorplanValue.right = {x: event.source.getFreeDragPosition().x,
                                   y: event.source.getFreeDragPosition().y}
      this.localizationConfig.right = Math.min(normalised.x, 1);
    }
  }

  unnormaliseDefectPosition(x,y){
    return {
        x: x*this.uploadedFloorplanWidth,
        y: y*this.uploadedFloorplanHeight
      }
  }
  normaliseDefectPosition(x,y){
    return {
      x: x/this.uploadedFloorplanWidth,
      y: y/this.uploadedFloorplanHeight
    }
  }


  ///////////////////////////////////////////

  submitProjectSetting(){
    this._gs.load()
    const projectConfigForm = new FormData();
    projectConfigForm.append("project_name", this.projectSettingForm.value.projectName);
    projectConfigForm.append("video_filenames", this.projectSettingForm.value.videoFilenames);
    projectConfigForm.append("flightlog_filenames", this.projectSettingForm.value.flightlogFilenames);
    projectConfigForm.append("image_file", this.projectSettingForm.value.floorplanImage);
    projectConfigForm.append("height", this.projectSettingForm.value.tankHeight);
    projectConfigForm.append("circumference", this.projectSettingForm.value.tankCircumference);
    projectConfigForm.append("left", this.localizationConfig.left);
    projectConfigForm.append("right", this.localizationConfig.right);
    projectConfigForm.append("bottom", this.localizationConfig.bottom);
    projectConfigForm.append("top", this.localizationConfig.top);
    projectConfigForm.append("x_start_coordinates", JSON.stringify(this.localizationConfig.x_start_coord));
    projectConfigForm.append("y_start_coordinates", JSON.stringify(this.localizationConfig.y_start_coord));

    this.allProjectService.addProjectEntry(projectConfigForm);
  }

}

import { Component, EventEmitter, ViewChild, OnInit, OnDestroy, ElementRef, Input, Output } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FloorplanService } from '../../services/floorplan.service';
import { VisualisationService } from '../../services/visualisation.service'
import { ResizedEvent } from 'angular-resize-event';
import { floorplanData } from '../../services/floorplanData.model';
import { defectData } from '../../services/defectData.model';

const defectPlaceholder = {// to change look of selected defect icon
  id: "",
  project_id: "",
  keyframe_id: "", // to update after adding keyframe
  floorplan_id: "",
  position_coordinates: [],
  x: [],
  y: [],
  defect_type: "",
  defect_comment: "",
  verified_status: false
};

@Component({
  // to leverage Angular Elements API to render into a static element
  // read more at: https://egghead.io/lessons/angular-transform-an-angular-component-into-a-native-custom-element
  // selector: 'app-floor-plan',
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit,OnDestroy {
  @ViewChild('selectedFloorplan', { static: true }) selectedFloorplan: ElementRef<HTMLImageElement>;
  @Input() lockDefects; // to be provide as input from parent
  @Input() selectedFloorplanId; // to be provide as input from parent
  @Output() selectDefect = new EventEmitter() // to display defect information
  selectedDefect = defectPlaceholder // to change look of selected defect icon
  selectedFloorplanHeight;
  selectedFloorplanWidth;
  projectId;
  unnormalisedDefects; /// For SVG
  normalisedDefects; /// For database
  loaded = false // to prevent resize event from calling at the start

  //Subscriptions
  private _floorplanDataSub
  private _defectDataSub
  loadFloorplanComponent = new Subscription;
  //////////////////////////////////////////////
  ////////////  Life cycle methods  ////////////
  //////////////////////////////////////////////
  constructor(private fs: FloorplanService, private router: Router, public vs: VisualisationService, public route: ActivatedRoute) { }
  
  ngOnInit(): void {
    /////////////////////////////////////////////////////////
    ////////////////  Callbacks to get data  ////////////////
    // called outside component: load data from end to end
    // i.e defects(DB) => defects(service) => normalisedDefects => unnormalised defects => SVG icon
    // when new defect data/ selected floorplan in viz component
    this.loadFloorplanComponent = this.fs.getLoadFloorplanComponentListener()
      .subscribe(() => {
        setTimeout(()=>{ // to make sure visualisation-page has set selectedFloorplanId before we load floorplan
          this.selectedDefect = defectPlaceholder
          // fetch floorplan image url and trigger (1), (2), (3)
          this.fs.getFloorplan(this.selectedFloorplanId)  
        },10)
      })   
    //////// (1) Get floorplan and load to floorplan src
    this._floorplanDataSub = this.fs.getFloorplanDataUpdateListener()
      .subscribe((floorplan: any) => {
        
        this.selectedFloorplan.nativeElement.src = floorplan.filename;
      });
    //////// (2) Get image size (normalising constant) from floorplan src, 
    ////////    get defects
    this.selectedFloorplan.nativeElement.onload = () => {
      this.selectedFloorplanHeight = this.selectedFloorplan.nativeElement.height;
      this.selectedFloorplanWidth = this.selectedFloorplan.nativeElement.width;
      this.fs.getDefects(this.selectedFloorplanId)
    }
    //////// (3) Keep a copy of normalised defects
    ////////    unnormalise and load defects
    this._defectDataSub = this.fs.getDefectDataUpdateListener()
      .subscribe((data: defectData[]) => {
        this.normalisedDefects = data
        this.unnormaliseAndLoadDefects(this.normalisedDefects)
        this.loaded = true
      });
    
  }

  ngOnDestroy(){
    this.loadFloorplanComponent.unsubscribe()
    this._floorplanDataSub.unsubscribe()
    this._defectDataSub.unsubscribe()
  }

  ///////////////////////////////////////////////
  //////////// Event-driven methods ////////////
  ///////////////////////////////////////////////
  positionChanged(defect, event: CdkDragEnd) {
    this.onSelect(defect)
    let normalised = this.normaliseDefectPosition(event.source.getFreeDragPosition().x, 
                                                  event.source.getFreeDragPosition().y)
    // update normalised data (need for rescaling/ saving to DB)
    this.normalisedDefects = this.normalisedDefects.map(nd => {
      if(nd.id === defect.id){
        nd.position_coordinates[0] = normalised.x
        nd.position_coordinates[1] = normalised.y
      }return nd
    })
    // reflect data in service 
    this.unnormaliseAndLoadDefects(this.normalisedDefects)
  }
  onResized(event: ResizedEvent) {
    if(this.loaded){ // if page havent load, resize event doesnt matter
      // get the new width and height for new normalising constants
      this.selectedFloorplanWidth = event.newWidth;
      this.selectedFloorplanHeight = event.newHeight;
      // using the new normalising constants, unnormalise and load
      this.unnormaliseAndLoadDefects(this.normalisedDefects)
    }
  }
  onSelect(defect){
    this.selectedDefect = defect
    // tell visualisation component which defect you selected
    
    const extractedURL = this.router.url.split("/")
    const projectId = extractedURL[extractedURL.length - 1];
    console.log(defect)
    this.router.navigate(['/edit', projectId,defect.keyframe_id]);
    //this.selectDefect.emit(defect) 
  }
  /// update database with normalisedDefects
  // ie normalisedDefects => defects(service)
  onSave(){
    console.log(this.normalisedDefects)
    this.fs.saveDefects(this.normalisedDefects,this.selectedFloorplanId)
  }
  onUndo(){
    this.fs.getDefects(this.selectedFloorplanId)
  }
  onDelete(){
    this.fs.deleteDefect(this.selectedDefect)
    this.fs.getDefects(this.selectedFloorplanId)
    this.onSelect(defectPlaceholder)
  }
  
  // onAdd(){
  //   // add defect
  //   let newDefect = {
  //     id: Date.now().toString(),
  //     project_id: this.projectId,
  //     keyframe_id: "", // to update after adding keyframe
  //     floorplan_id: this.selectedFloorplanId,
  //     position_coordinates: [Math.random(), Math.random()],
  //     x: [],
  //     y: [],
  //     defect_type: "",
  //     defect_comment: "",
  //     verified_status: false
  //   }
  //   this.fs.addDefect(newDefect)
  //   this.onSelect(newDefect)
  //   this.fs.getDefects(this.selectedFloorplanId)
  // }
  

  ////////////////////////////////////////
  //////////// Helper methods ////////////
  ////////////////////////////////////////
  // Method that takes in normalisedDefects(fetched from service), 
  // creates updates SVG-bounded array (this.unnormalisedDefects) with un-normalisedDefects
  unnormaliseAndLoadDefects(normalisedDefects){
    this.unnormalisedDefects = normalisedDefects.map((defect) => {
      let unnormalised = this.unnormaliseDefectPosition(defect.position_coordinates[0], defect.position_coordinates[1])
      return {
        ...defect,
        x: unnormalised.x,
        y: unnormalised.y
      }
    })
  }
  unnormaliseDefectPosition(x,y){
    return {
        x: x*this.selectedFloorplanWidth, 
        y: y*this.selectedFloorplanHeight
      }
  }
  normaliseDefectPosition(x,y){
    return {
      x: x/this.selectedFloorplanWidth, 
      y: y/this.selectedFloorplanHeight
    }
  }
  
  
}

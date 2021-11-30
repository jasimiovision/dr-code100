import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditService } from '../../services/edit.service'
import { GlobalService } from '../../../general-services/global.service'
import { floorplanData } from '../../services/floorplanData.model';
import { keyframeData } from '../../services/keyframeData.model';
import { defectData } from '../../services/defectData.model';


class Polygon { // i.e. a defect instance
  x=[]; // normalized values
  y=[]; // normalized values
  defect_type = "";
  comment="";
  
  static WIDTH;
  static HEIGHT;
  static threshold = 8; // threshold (in pixels) to detect last point to close mask
  done = false; // still creating polygon
  addPoint(x,y){
    // detect last point
    if(Polygon.isSamePoint(x,y,this.x[0],this.y[0])){
        this.done = true;         
        return this.done
    }else{ // else, append point
        this.x.push(x);
        this.y.push(y);
        return this.done
    }
  }
  constructor(x,y) {
    this.x.push(x);
    this.y.push(y);
  }
  static isSamePoint(click_x, click_y, x, y): boolean{ // normalised arguments
    return ((Polygon.WIDTH*Math.abs(click_x-x))< Polygon.threshold && 
            (Polygon.HEIGHT*Math.abs(click_y-y))< Polygon.threshold)
  }
}


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;
  
  private ctx: CanvasRenderingContext2D;
  rect: DOMRect; // get absolute pixel coordinates of canvas for referencing
  HEIGHT;
  WIDTH;
  selectedImage = new Image()
  tool = 'mouse';// mouse:select point/polygon | draw:select newpoint/edge

  // Data
  projectId
  floorplanId;
  keyframes = []
  selectedKeyframeId = "";
  //Subscribers
  private _floorplanDataSub
  private _keyframeDataSub
  private _defectDataSub
  dataItem:any = {} 
    polygons: Polygon[] = []; // list of defects from selected keyframe --> TODO: fetch from service
  selectedPolygon;
  selectedPoint = {
    x:0,
    y:0,
    point_idx:0,
    polygon_idx:0
  }
  
  ////// draw mode //////
  finishedDrawing = true;
  ////// mouse mode //////
  selected = ""; // "", "point" or "polygon"  
  editDefect = false;

  constructor(public es: EditService,private router: Router, public route: ActivatedRoute, public gs: GlobalService) { }
   ngOnInit(): void {

    this.gs.load()
    // this.canvas.nativeElement.width = 706; // fix size of canvas
    // this.canvas.nativeElement.height = 480; // fix size of canvas
    
    // Replot canvas whenever we load new src/resize the image
    this.selectedImage.onload =(e)=> { this.plotAll() }
    this.selectedImage.onresize =(e)=> { this.plotAll() }

    // Observables to get data
    this._floorplanDataSub = this.es.getFloorplanDataUpdateListener()
      .subscribe((data: floorplanData[]) => {
        this.floorplanId = data[0].id;
      });
    this._keyframeDataSub = this.es.getKeyframeDataUpdateListener()
      .subscribe((data: keyframeData[]) => {
        this.keyframes = data;
        // for the first time:
         const extractedURL = this.router.url.split("/")
         if(extractedURL.length == 4){
        
         this.selectedKeyframeId = extractedURL[extractedURL.length - 1];
         }
        if (this.selectedKeyframeId==="" && this.keyframes.length>0){
    
          this.selectedKeyframeId = this.keyframes[0].id
        }
        this.es.getDefects(this.selectedKeyframeId)
      });
    this._defectDataSub = this.es.getDefectDataUpdateListener()
      .subscribe((data: defectData[]) => {
        let defects = data;
        this.polygons = defects ? this.defects2polygons(defects) : []
        // assign image and plot
        this.selectedImage.src = this.keyframes.find((kf) => {
          return kf.id == this.selectedKeyframeId
        }).filename;
        
             this.es.checkedithistory(this.selectedKeyframeId).subscribe(transformedOutput => {
             
         
            this.dataItem=transformedOutput;
            console.log(this.dataItem)
        })
             
        this.gs.loaded()
      });
    
    // Retrieve projectID and fetch data
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.projectId = paramMap.get("id")
      this.es.getFloorplans(this.projectId)
      this.es.getKeyframes(this.projectId)

    });   
  }
  
  
  /////////////////////// Click Methods ///////////////////////
  onMouseButton(){
    this.tool = 'mouse';
    this.selected = ""
    this.selectedPolygon = null;
    this.editDefect = false;
    if(this.polygons.length>=1){
      if(!(this.polygons[this.polygons.length-1].done)){
        this.polygons.splice(this.polygons.length-1,1); // remove unfinished polygon
        this.finishedDrawing = true;
      }
    }
    this.plotAll();
  }
  onAddButton(){
    this.tool = 'draw';
    this.selectedPoint = {
      x:0,
      y:0,
      point_idx:0,
      polygon_idx:0
    }
    this.selectedPolygon = null;
    // remove unfinished polygon
    if(this.polygons.length>1){
      if(!this.polygons[this.polygons.length-1].done){
        this.polygons.splice(this.polygons.length-1,1);
        this.finishedDrawing = true;
      }
    }
    this.plotAll();
  }
  clearPolygons(){
    this.polygons = [];
    this.onMouseButton()
  }
  clear(){
    if(this.selected == "polygon"){ 
      // delete polygon
      this.polygons.splice(this.selectedPoint.polygon_idx,1) //note: to select a polygon, a point would have been selected first
      this.selectedPolygon = null;
    }
    else if(this.selected == "point"){
      // delete point
      this.polygons[this.selectedPoint.polygon_idx].x.splice(this.selectedPoint.point_idx,1)
      this.polygons[this.selectedPoint.polygon_idx].y.splice(this.selectedPoint.point_idx,1)
    }
    this.onMouseButton()
  }
  
  selectThumbnail(kf){
    // Get defects and assign defects
    this.selectedKeyframeId = kf.id
    this.es.getDefects(this.selectedKeyframeId)
    // assign image and plot
    this.selectedImage.src = kf.filename;
    this.onMouseButton()
  }
  verifyKeyframe(){
    const selectedKeyframe = this.keyframes.find((kf)=> kf.id == this.selectedKeyframeId)
    let defects = this.polygons2defects(this.polygons,selectedKeyframe)
    console.log("defects,this.selectedKeyframeId: ",defects,this.selectedKeyframeId)
    this.es.verifyDefects(defects,this.selectedKeyframeId)
    this.es.checkedithistory(this.selectedKeyframeId)
    // update verified status on front end
    this.keyframes.map(kf => {
      if(kf.id == this.selectedKeyframeId){
        kf.verified_status = true
      }
    })
  }

  /////////////////////// Top-level methods ///////////////////////
  canvasOnClick(e){
    // console.log("this.selected: "+this.selected)
    if (this.tool == 'mouse'){ this.mouseClick(e) }
    else if (this.tool == 'draw'){ this.drawClick(e) }    
  }
  plotAll(){
    // Create canvas context
    this.ctx = this.canvas.nativeElement.getContext('2d');
    // reassign normalising constants
    this.rect = this.canvas.nativeElement.getBoundingClientRect(); // to get canvas offset 
    this.canvas.nativeElement.width = this.rect.width; // to get normalising factor
    this.canvas.nativeElement.height = this.rect.height; // to get normalising factor
    Polygon.WIDTH = this.rect.width;
    Polygon.HEIGHT = this.rect.height;
    
    // draw images and plot polygons
    this.ctx.clearRect(0,0,this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.drawImage(this.selectedImage, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for(let i=0;i<this.polygons.length;i++){
      this.plotPolygon(this.polygons[i]);
    }
  }
  defects2polygons(defects){
    let polygons = []
    for(let defect of defects){
      let polygon = new Polygon(0,0) // will override the coordinates
      polygon.x = defect.x; 
      polygon.y = defect.y; 
      polygon.defect_type = defect.defect_type;
      polygon.comment = defect.defect_comment;
      polygon.done = true;
      polygons.push(polygon)
    }
    return polygons
  }
  polygons2defects(polygons, selectedKeyframe){
    let defects = []
    for(let polygon of polygons){
      // calculate defect position based on FOV of keyframe
      const position_coordinates_x = selectedKeyframe.position_coordinates[0]+((this.mean(polygon.x)-0.5)*selectedKeyframe.fov_coordinates[0])
      const position_coordinates_y = selectedKeyframe.position_coordinates[1]+((this.mean(polygon.y)-0.5)*selectedKeyframe.fov_coordinates[1])
      let defect = {
        project_id: this.projectId,
        keyframe_id: selectedKeyframe.id,
        floorplan_id: this.floorplanId,
        position_coordinates: [position_coordinates_x, position_coordinates_y],
        x: polygon.x,
        y: polygon.y,
        defect_type: polygon.defect_type,
        defect_comment: polygon.comment,
        verified_status: true
      }
      defects.push(defect)
    }
    return defects
  }

  /////////////////////// Helper methods ///////////////////////
  mouseClick(e){
    let norm_x = (e.x -this.rect.x)/this.canvas.nativeElement.width;
    let norm_y = (e.y -this.rect.y)/this.canvas.nativeElement.height;
    // if point is already selected, select polygon same point if clicked again
    if(this.selected == "point"){
      let selected_x = this.polygons[this.selectedPoint.polygon_idx].x[this.selectedPoint.point_idx];
      let selected_y = this.polygons[this.selectedPoint.polygon_idx].y[this.selectedPoint.point_idx];
      if(Polygon.isSamePoint(norm_x, norm_y, selected_x, selected_y)){ // check if already selected
        // unselect point, selected point will be reassigned if selected.
        this.selected = "polygon";
        // select polygon
        this.selectedPolygon = this.polygons[this.selectedPoint.polygon_idx]
      }
      // if not same point, check if it's another point or a random location
      else{
        if(!this.isPolygonPoint(e)){ ////// check if its another point is selected
          // or else change location to mouse click location              
          this.polygons[this.selectedPoint.polygon_idx].x[this.selectedPoint.point_idx] = norm_x;
          this.polygons[this.selectedPoint.polygon_idx].y[this.selectedPoint.point_idx] = norm_y;
          this.selected = "";
        }       
      }
    }
    //// if no points are currently selected
    else if (this.selected == "" || this.selected == "polygon"){
      if(!this.isPolygonPoint(e)){
        this.selectedPolygon = null;
        this.selected = "" // if just clicking empty space:
      }
    }
    this.plotAll();
  }
  drawClick(e){
    let norm_x = (e.x -this.rect.x)/this.canvas.nativeElement.width;
      let norm_y = (e.y -this.rect.y)/this.canvas.nativeElement.height;
      if(this.finishedDrawing){ // creating a new point/polygon
        
        ////////////// This block is to append point to existing polygon ////////////////
        // // check if it lies on any line
        // for (let p=0;p<this.polygons.length;p++){ // for every polygon
        //   let polygon = this.polygons[p];
        //   for(let i=0;i<polygon.x.length;i++){ // for every point
        //     let dist1_sq = Math.pow((norm_y-polygon.y[i]),2) + Math.pow((norm_x-polygon.x[i]),2);
        //     let dist2_sq = Math.pow((norm_y-polygon.y[i-1]),2) + Math.pow((norm_x-polygon.x[i-1]),2);
        //     let dist3_sq = Math.pow((polygon.y[i]-polygon.y[i-1]),2) + Math.pow((polygon.x[i]-polygon.x[i-1]),2);
        //     // console.log(Math.abs(dist3_sq-dist2_sq-dist1_sq))
        //     if(Math.abs(dist3_sq-dist2_sq-dist1_sq)<0.01){ // add point if it lies on line
        //       polygon.x.splice(i,0,norm_x)
        //       polygon.y.splice(i,0,norm_y)
        //       this.plotAll()
        //       this.tool='mouse';
        //       return // if it lies on line, we dont make a new polygon
        //     }
        //   }
        // }

        var polygon = new Polygon(norm_x, norm_y);
        this.polygons.push(polygon);
        this.finishedDrawing = false;
        this.plotAll();
      }
      else{ // still drawing previous polygon
        polygon = this.polygons[this.polygons.length-1]; 
        this.finishedDrawing = polygon.addPoint(norm_x,norm_y)
        if(this.finishedDrawing){
          this.tool='mouse';
        }
        this.plotAll();
      }
  }
  isPolygonPoint(e){ // if it is a polygon point, this function will select it and return true
    let norm_x = (e.x -this.rect.x)/this.canvas.nativeElement.width;
    let norm_y = (e.y -this.rect.y)/this.canvas.nativeElement.height;
    ////// check if its another point is selected
    for (let p=0;p<this.polygons.length;p++){ // for every polygon
      let polygon = this.polygons[p];
      for(let i=0;i<polygon.x.length;i++){ // for every point
        if(Polygon.isSamePoint(norm_x,norm_y,polygon.x[i],polygon.y[i])){ // if point is near your click
          // select point
          this.selected = "point"
          this.selectedPolygon = null;
          this.selectedPoint.x=polygon.x[i];
          this.selectedPoint.y=polygon.y[i];
          this.selectedPoint.point_idx = i;
          this.selectedPoint.polygon_idx = p;
          console.log(this.selectedPoint);
          return true
        }
      }
    }
    return false
  }
  plotPolygon(polygon:Polygon){
    // connect the dots and fill polygon
    this.ctx.beginPath();
    for(var i=0;i<polygon.x.length;i++){
      if(i==0){
        let pixel_x = this.canvas.nativeElement.width * polygon.x[i];
        let pixel_y = this.canvas.nativeElement.height * polygon.y[i];
        this.ctx.moveTo(pixel_x,pixel_y);
      }
      else{
        let pixel_x = this.canvas.nativeElement.width * polygon.x[i];
        let pixel_y = this.canvas.nativeElement.height * polygon.y[i];  
        this.ctx.lineTo(pixel_x,pixel_y);
        this.ctx.strokeStyle = '#22a8c9';
        this.ctx.stroke();
      }
    }
    if(polygon.done){ // finish the last connection
        this.ctx.closePath();
        this.ctx.strokeStyle = '#22a8c9';
        this.ctx.stroke();
        this.ctx.fillStyle = (this.selected=="polygon" && polygon==this.selectedPolygon) ? 
                              'rgba(34, 168, 201, 0.5)': 
                              'rgba(34, 168, 201, 0.1)'
        this.ctx.fill()
    }
    // overlay dots
    for(let i=0;i<polygon.x.length;i++){
      let pixel_x = this.canvas.nativeElement.width * polygon.x[i];
      let pixel_y = this.canvas.nativeElement.height * polygon.y[i];
      this.ctx.beginPath();
      this.ctx.arc(pixel_x,pixel_y,2,0,Math.PI *2,false);
      // fill selected point as red
      if(this.selected == "point" && this.selectedPoint.x == polygon.x[i] && this.selectedPoint.y == polygon.y[i]){
        this.ctx.arc(pixel_x,pixel_y,5,0,Math.PI *2,false);
        this.ctx.fillStyle = '#ffcc00';
      }else{
        this.ctx.arc(pixel_x,pixel_y,3,0,Math.PI *2,false);
        this.ctx.fillStyle = '#22a8c9'
      }
      this.ctx.fill();
      this.ctx.closePath();
    }
    
  }
  ///to bind to [disabled] property in HTML
  // getEditMode(){
  //   return this.editDefect
  // }
  getSelectedPolygon(){
    return this.selectedPolygon
  }
  mean =(arr)=> arr.reduce((prev, curr) => prev + curr) / arr.length;
  // for html to call
  isVerified(){
    const selectedKeyframe = this.keyframes.find((kf)=>kf.id == this.selectedKeyframeId)
    if(!selectedKeyframe){
      return false
    }
    return selectedKeyframe.verified_status
  }
}

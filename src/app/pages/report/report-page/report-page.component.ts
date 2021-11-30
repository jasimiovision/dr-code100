import { Component, ViewContainerRef, OnInit, AfterViewInit, OnDestroy, HostListener  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs';

import html2canvas from 'html2canvas';

// https://ckeditor.com/ckeditor-5/online-builder/
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import * as ClassicEditor from '../../services/ckeditor.js';
import { UploadAdapter } from "../../services/uploadAdapter";
import ckconfig from '../../services/ckconfig.js';
import dragElement from "../../services/draggable.js"

import { AuthService } from "../../../general-services/auth.service";
import { GlobalService } from '../../../general-services/global.service';
import { ReportDataService } from "../../services/reportData.service";
import { AllProjectService } from "../../services/allProject.service";
import { FloorplanService } from '../../services/floorplan.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    const ctrlKey = navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey
    // console.log(ctrlKey, event.which)
    if (event.which == 115 && ctrlKey){
      event.preventDefault();
      this.saveReport()
    }
  }
  
  private toolbar: HTMLElement;

  ////////// Editor Configuration  //////////
  public Editor = ClassicEditor;
  public isEdit: boolean = true;
  public editorConfig = ckconfig;
  public onReady( editor ) {
    // called once when editor loads
    // console.log(this.projectName)
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      // called everytime I add an image onto ckeditor
      // console.log(this.projectName)
      return new UploadAdapter(loader,this.projectName);
    };
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }
  //////// Report data related
  public currentProjId: string;
  private currentProjType: string;
  public reportData = {header_data:"",content:[]}
  public projectName: string;
  public floorplanIds = [] // for drop-down menu to add new component
  public isClient: boolean = true;
  public isAdmin: boolean = false;

  private _projectDataSub: Subscription;
  private _reportDataSub: Subscription;
  private _floorplanSub: Subscription;

  

  constructor(
    private _route: ActivatedRoute, 
    public gs: GlobalService, 
    private _rds: ReportDataService, 
    private _as: AuthService, 
    private _aps: AllProjectService, 
    private _fs: FloorplanService,
    private _vcr: ViewContainerRef
  ) { }
  
  ngOnInit(): void {
    this.gs.load()
    const role = this._as.getAuthData()["role"];
    this.isClient = (role === "client") ? true : false;
    this.isAdmin = (role === "admin") ? true : false;
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const projId = paramMap.get("id")
      this.currentProjId = projId;
      this._aps.getProjectData(projId);
      this._rds.getReportDataByProjId(projId);
    });
    this._projectDataSub = this._aps.getProjectUpdateListener()
      .subscribe((project: any) => {
        this.projectName = project.name;
        this._fs.getFloorplans(this.currentProjId);
    })
    this._reportDataSub = this._rds.getReportDataUpdateListener()
      .subscribe((resData) => {
        // console.log(resData)
        this.reportData = resData
    });
    this._floorplanSub = this._fs.getAllFloorplanDataUpdateListener()
      .subscribe((data: any[]) => {
        this.floorplanIds = data;
    })
  }
  ngAfterViewInit(){
    this.toolbar = document.getElementById("toolbar")
    dragElement(this.toolbar);
    // wait till app-floor-plan is added to DOM by ngIf
    setTimeout(()=>{
      this._fs.loadFloorplanComponent()
      this.gs.loaded()
    },2000)
  }

  ngOnDestroy(): void {
    this._projectDataSub.unsubscribe();
    this._reportDataSub.unsubscribe();
    this._floorplanSub.unsubscribe();
  }

  saveReport(){
    this.gs.load();
    this.scrollToTop();
    this.getPreviewThumbnail().then((thumbnailBlob)=>{
      this._rds.saveReport();
      this._rds.updateThumbnail(thumbnailBlob, this.projectName);
    }) 
    // _rds method will stop the loading
  }

  saveAsTemplate(){
    this.gs.load();
    this._rds.saveReportAsTemplate(this.projectName)
    // TemplateDataService method will stop the loading and naviage to template page
  }

  addEntry(type: string, floorplanId: string) {
    this._rds.addReportEntry(type, floorplanId);
  }

  deleteEntry(id: string){
    this._rds.deleteReportEntry(id);
  }

  shiftUp(index: number){
    this._rds.shiftUpReportEntry(index);
  }

  shiftDown(index: number){
    this._rds.shiftDownReportEntry(index);
  }
  scrollToTop(){
    document.documentElement.scrollTop = 0
  }

  previewReport(){
    this._rds.saveReport(false);
    this._rds.generateReportPreview(this._vcr);
  }

  // https://stackblitz.com/edit/angular-html2canvas-example?file=src%2Fapp%2Fapp.component.html
  async getPreviewThumbnail(){
    let previewInfoElement:HTMLElement = document.querySelector("#previewInfo")
    let reportContent = ""
    reportContent += this.reportData.header_data
    this.reportData.content.forEach(el => {
      if(el.type == "editor"){
        reportContent += el.relevantInfo
      }
    });
    previewInfoElement.innerHTML = reportContent
    let canvas = await html2canvas(document.querySelector("#previewInfo"))
    // this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.capturedImage);
    const dataURItoBlob = (dataURI) => {
      var binary = atob(dataURI.split(',')[1]);
      var array = [];
      for(var i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {type:'image/jpeg'});
    }
    let capturedImageURI; 
    capturedImageURI = canvas.toDataURL();
    let capturedImageBlob = dataURItoBlob(capturedImageURI)
    previewInfoElement.innerHTML = ""
    return capturedImageBlob   
  }
}

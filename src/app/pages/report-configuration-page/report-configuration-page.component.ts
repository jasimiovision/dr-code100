import { Component, OnInit, ViewContainerRef, HostListener  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs';

import html2canvas from 'html2canvas';

// https://ckeditor.com/ckeditor-5/online-builder/
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import * as ClassicEditor from '../services/ckeditor.js';
import { UploadAdapter } from "../services/uploadAdapter";
import ckconfig from '../services/ckconfig.js';

import { ReportDataService } from "../services/reportData.service";
import { AllProjectService } from "../services/allProject.service";
import { TemplateDataService } from "../services/templateData.service";
import { GlobalService } from '../../general-services/global.service';
import { AuthService } from "../../general-services/auth.service";


@Component({
  selector: 'app-report-configuration-page',
  templateUrl: './report-configuration-page.component.html',
  styleUrls: ['./report-configuration-page.component.scss']
})
export class ReportConfigurationPageComponent implements OnInit {
  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) { 
  //   const ctrlKey = navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey
  //   if (event.which == 115 && ctrlKey){
  //     event.preventDefault();
  //     this.saveHeader()
  //   }
  // }
  private _placeholderUrl = "../../../assets/white-sq.png"

  public currentProjId: string;
  public projectName: string;
  public isClient: boolean;
  public reportData = {header_data:"",footer_data:"",content:[]}
  public allTemplates = []

  private _projectDataSub: Subscription;
  private _reportDataSub: Subscription;
  private _reportThumbnailSub: Subscription;
  private _allTemplatesSub: Subscription;

  ////////// Editor Configuration  //////////
  public Editor = ClassicEditor;
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
  public isEdit: boolean = true;
  public editorConfig = ckconfig;
  ////////////////////////////////////////////

  constructor(
    private _route: ActivatedRoute,
    private _gs: GlobalService,
    private _rds: ReportDataService,
    private _aps: AllProjectService, 
    private _ts: TemplateDataService,
    private _as: AuthService, 
    private _vcr: ViewContainerRef
    ) { }

  ngOnInit(): void {
    this._gs.load()
    const role = this._as.getAuthData()["role"];
    this.isClient = (role === "client") ? true : false;
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const projId = paramMap.get("id")
      this.currentProjId = projId;
      // get project name and header data
      this._aps.getProjectData(projId);
      this._rds.getReportDataByProjId(projId);
      this._ts.getAllTemplateData(role)
    });
    this._projectDataSub = this._aps.getProjectUpdateListener()
      .subscribe((project: any) => {
        this.projectName = project.name;
        // console.log(`Fetched projectName: ${this.projectName}`)
    })
    this._reportDataSub = this._rds.getReportDataUpdateListener()
      .subscribe((resData: any) => {
        this.reportData = resData
        console.log(resData)
    })
    this._reportThumbnailSub = this._rds.getReportThumbnailUpdateListener()
      .subscribe((url) => {
        let thumbnailElement:HTMLImageElement = document.querySelector("#report-thumbnail")
        const srcUrl = url ? url : this._placeholderUrl
        // refresh thumbnail upon save
        thumbnailElement.src = srcUrl
        this._gs.loaded()
    })
    this._allTemplatesSub = this._ts.getAllTemplateDataUpdateListener()
      .subscribe((data) => {
        this.allTemplates = data;
        this.allTemplates.forEach(template => {
          if(!template.thumbnail_key){
            template.thumbnail_key = this._placeholderUrl
          }
        })
        this._gs.loaded()
    });    
  }
  
  ngOnDestroy(): void {
    this._reportDataSub.unsubscribe();
    this._projectDataSub.unsubscribe();
    this._reportThumbnailSub.unsubscribe();
    this._allTemplatesSub.unsubscribe();
  }

  // https://stackblitz.com/edit/angular-html2canvas-example?file=src%2Fapp%2Fapp.component.html
  async getPreviewThumbnail(display=true){
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
    console.log(capturedImageBlob);
    return capturedImageBlob
  }
  

  saveHeader(){
    this._gs.load();
    this.scrollToTop(); // if not the screenshot into thumbnail will be cut off
    this.getPreviewThumbnail(false).then((thumbnailBlob)=>{
      this._rds.saveHeader();
      this._rds.updateThumbnail(thumbnailBlob, this.projectName);
    })
    // _rds method will stop the loading
  }

  saveFooter(){
    this._gs.load();
    this.scrollToTop(); // if not the screenshot into thumbnail will be cut off
    this.getPreviewThumbnail(false).then((thumbnailBlob)=>{
      this._rds.saveFooter();
      this._rds.updateThumbnail(thumbnailBlob, this.projectName);
    })
    // _rds method will stop the loading
  }

  scrollToTop(){
    document.documentElement.scrollTop = 0
  }

  previewReport(){
    this._rds.generateReportPreview(this._vcr);
  }
  previewTemplate(template){
    this._ts.generateTemplatePreview(template);
  }
  appendToReport(template){
    const appendConfirmed = confirm(`Are you sure you want to append template '${template.template_name}' to report?`)
    if (appendConfirmed) {
      this._gs.load();
      this._rds.appendToReport(template);
      this.scrollToTop(); // if not the screenshot into thumbnail will be cut off
      this.getPreviewThumbnail(false).then((thumbnailBlob)=>{
        this._rds.saveFullReport();
        this._rds.updateThumbnail(thumbnailBlob, this.projectName);
      })
    }
  }
}

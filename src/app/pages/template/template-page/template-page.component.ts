import { Component, OnInit, AfterViewInit, OnDestroy, HostListener  } from '@angular/core';
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

import { GlobalService } from '../../../general-services/global.service';
import { TemplateDataService } from "../../services/templateData.service";

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss']
})

// Only accessible by admin
export class TemplatePageComponent implements OnInit {
  
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
      return new UploadAdapter(loader,this._templateId,false);
    };
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }

  //////// Template data related
  private _templateId
  public templateData = {
    id:"",
    header_data:"",
    content: [],
    template_name: "",
    template_description: "",
    thumbnail_key:""
  };

  private _templateDataSub: Subscription;

  constructor(
    private _route: ActivatedRoute, 
    private _gs: GlobalService,
    private _tds: TemplateDataService
  ) { }

  ngOnInit(): void {
    this._gs.load()
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const templateId = paramMap.get("id")
      this._templateId = templateId;
      this._tds.getTemplateData(templateId)
    });
    this._templateDataSub = this._tds.getTemplateDataUpdateListener()
      .subscribe((resData) => {
        this.templateData = resData
        this._gs.loaded()
    });
  }
  ngAfterViewInit(){
    this.toolbar = document.getElementById("toolbar")
    dragElement(this.toolbar);
  }

  ngOnDestroy(): void {
    this._templateDataSub.unsubscribe();
  }
  
  saveTemplate(){
    this._gs.load();
    this.scrollToTop();
    this.getPreviewThumbnail().then((thumbnailBlob)=>{
      this._tds.saveTemplate();
      this._tds.updateThumbnail(thumbnailBlob);
    }) 
    // _tds method will stop the loading
  }
  
  previewTemplate(){
    console.log(this.templateData)
    this._tds.saveTemplate(false);
    this._tds.generateTemplatePreview();
  }
  
  addEntry() {
    this._tds.addTemplateEntry();
  }

  deleteEntry(id: string){
    this._tds.deleteReportEntry(id);
  }

  shiftUp(index: number){
    this._tds.shiftUpTemplateEntry(index);
  }

  shiftDown(index: number){
    this._tds.shiftDownTemplateEntry(index);
  }
  
  scrollToTop(){
    document.documentElement.scrollTop = 0
  }

  // https://stackblitz.com/edit/angular-html2canvas-example?file=src%2Fapp%2Fapp.component.html
  async getPreviewThumbnail(){
    let previewInfoElement:HTMLElement = document.querySelector("#previewInfo")
    let templateContent = ""
    templateContent += this.templateData.header_data
    this.templateData.content.forEach(el => {
      if(el.type == "editor"){
        templateContent += el.reportData
      }
    });
    previewInfoElement.innerHTML = templateContent
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

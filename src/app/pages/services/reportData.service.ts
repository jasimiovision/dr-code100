import { Injectable, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import previewCss from './previewCss.js'

import { GlobalService } from '../../general-services/global.service'
import { FloorplanService } from './floorplan.service'
import { TemplateDataService } from './templateData.service'

@Injectable({providedIn: 'root'})
export class ReportDataService {
  private _reportData = {
    id:"",
    header_data:"",
    footer_data:"",
    content: [],
    project_id:"",
    thumbnail_key:""
  };
  
  private _reportDataUpdated = new Subject<any>();
  private _reportThumbnailUpdated = new Subject<any>();
  private _floorplansUpdated = new Subject<any[]>();

  constructor(private _http: HttpClient, 
              private _router: Router, 
              private _fs: FloorplanService,
              private _cfr: ComponentFactoryResolver,
              private _ts: TemplateDataService,
              public gs: GlobalService
              ) {}

  getReportDataUpdateListener =()=> this._reportDataUpdated.asObservable();
  getReportThumbnailUpdateListener =()=> this._reportThumbnailUpdated.asObservable();
  
  // HTTP methods //

  // This is the entry function for the service
  getReportDataByProjId(projId: string) {
    this._http.get<{data: any}>(environment.apiURL + "/report/" + projId)
    .pipe(map((res) => {
      res.data.id = res.data._id.toString();
      res.data.content =  res.data.content.map(reportData => {
        return {
          id: reportData._id.toString(),
          type: reportData.type,
          relevantInfo: (reportData.type === "editor") ? reportData.reportData : reportData.floorplanId
        }
      })
      return res.data
    }))
    .subscribe(
      (resData) => {
        this._reportData = resData
        console.log("getReportDataByProjId: ", resData)
        this._reportDataUpdated.next(resData);
        this._reportThumbnailUpdated.next(resData.thumbnail_key);
      },
      (error) => {
        console.error("getReportDataByProjId: ", error)
        // this._router.navigate(["/home"])
    })
  }

  addReportEntry(type: string, floorplanId: string){
    if (type === "editor") {
      this._reportData.content.push({
        'id': Date.now().toString(),
        'type': 'editor',
        'relevantInfo': null
      });
    } else if (type === "floorplan") {
      this._reportData.content.push({
        'id': Date.now().toString(),
        'type': 'floorplan',
        'relevantInfo': floorplanId
      })
    }
     //console.log("addReportEntry")
    this._reportDataUpdated.next(this._reportData);
  }

  saveReportAsTemplate(projName){
    const templateData = {
      ... this._reportData,
      template_description: `Template created with reference to ${projName}.`
    }
    // only retain editor content from report, remove img tags (templates should not have images)
    templateData.header_data = this._reportData.header_data.replace(/<figure class="image(.*?)><\/figure>/g,"");
    templateData.content = this._reportData.content.map(el => {
                            if (el.type === "editor"){ 
                              let content = el.relevantInfo.replace(/<figure class="image(.*?)><\/figure>/g,"");
                              return{
                                type: el.type,
                                reportData: content
                              }
                            }
                          })

    this._ts.createReportTemplate(templateData)
  }

  deleteReportEntry(id: string){
    this._reportData.content = this._reportData.content.filter(reportDataEntry => reportDataEntry.id !== id);
    // console.log("deleteReportEntry")
    this._reportDataUpdated.next(this._reportData);
  }

  updateThumbnail(thumbnailBlob, projectName){
    var form = new FormData();
    form.append("id", this._reportData.id)
    form.append("projectName", projectName)
    form.append("thumbnailImage", thumbnailBlob, projectName);
  
    // for (var pair of form.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }
    this._http.post<{url: string}>(environment.apiURL + "/report/thumbnail", form)
    .subscribe(
      (resData) => { 
        console.log(resData)
        this._reportThumbnailUpdated.next(resData.url);
      }
    )
  }
  saveHeader(){
    this._http.put<{message: string}>(environment.apiURL + "/report/header/" + this._reportData.id, {headerData: this._reportData.header_data})
    .subscribe(
      (resData) => { 
        this.gs.loaded()
        window.alert(resData.message) 
      },
      (_) => { 
        this.gs.loaded()
        window.alert("Failed to save header.") 
      }
    )
  }
   saveFooter(){
    this._http.put<{message: string}>(environment.apiURL + "/report/footer/" + this._reportData.id, {footerData: this._reportData.footer_data})
    .subscribe(
      (resData) => { 
        this.gs.loaded()
        window.alert(resData.message) 
      },
      (_) => { 
        this.gs.loaded()
        window.alert("Failed to save footer.") 
      }
    )
  }

  saveReport(showResult=true){
    // console.log(this._reportData)
    const newReportData = this._reportData.content.map(el => {
      if (el.type === "editor"){
        return {
          "type": el.type,
          "reportData": el.relevantInfo
        }
      }
      if (el.type === "floorplan"){
        return {
          "type": el.type,
          "floorplanId": el.relevantInfo
        }
      }
    })
    this._http.put<{message: string}>(environment.apiURL + "/report/" + this._reportData.id, {reportContent: newReportData})
    .subscribe(
      (resData) => {
        if(showResult){
          this.gs.loaded()
          window.alert(resData.message);
        }
      },
      (_) => {
        this.gs.loaded()
        window.alert("Fail to Save Report");
      }
    )
  }  
  saveFullReport(){
    const newReportData = this._reportData.content.map(el => {
      if (el.type === "editor"){
        return {
          "type": el.type,
          "reportData": el.relevantInfo
        }
      }
      if (el.type === "floorplan"){
        return {
          "type": el.type,
          "floorplanId": el.relevantInfo
        }
      }
    })
    const body = {
      reportContent: newReportData,
      headerData: this._reportData.header_data
    }
    this._http.put<{message: string}>(environment.apiURL + "/report/full/" + this._reportData.id, body)
    .subscribe(
      (resData) => {
          this.gs.loaded()
          window.alert(resData.message);
      },
      (_) => {
        this.gs.loaded()
        window.alert("Fail to Save Report");
      }
    )
  }

  appendToReport(template){
    console.log(template)
    console.log(this._reportData)
    // update header
    this._reportData.header_data += template.header_data
    // update content
    template.content.forEach(el => {
      el.relevantInfo = el.reportData
      this._reportData.content.push(el)
    })
    console.log(this._reportData)
  }

  async generateReportPreview(vcr: ViewContainerRef){
    //////////// for generating preview window ////////////
     console.log(this._reportData)
    let newWindow = window.open();
    // clear existing window
    newWindow.document.body.innerHTML = "";
    // specify A4 dimensions padding: 25.4mm 31.7mm 25.4mm 31.7mm; 
    newWindow.document.write(previewCss) // append style tag
    newWindow.document.write("<body></body>") /// append body tag
    // Note: document.write applies to point of execution. appendChild() happens afterwards
    // https://stackoverflow.com/questions/1360869/how-to-use-html-to-print-header-and-footer-on-every-printed-page-of-a-document
    // specify html skeleton with repeated header and footer

    newWindow.document.write(`<table class="report-container">
                        <thead class="report-header"><tr><td>
                            ${this._reportData.header_data}
                        </td></tr></thead>
                        
                        <tbody><tr><td id="content">
                        </td></tr></tbody> <tfoot><tr> <td><div class="footer-space">&nbsp;</div></td></tr></tfoot></table><div id="footer">${this._reportData.footer_data}</div> `)
                        
                        
                        // populate report  
    let content = newWindow.document.getElementById("content")
    // https://advancedweb.hu/how-to-use-async-functions-with-array-foreach-in-javascript/
    this._reportData.content.reduce(async (memo, el) => {
      await memo // to put it in javascript event loop for sequential iteration
      if(el.type == "editor"){
        // let div = newWindow.document.createElement('div');
        content.innerHTML += el.relevantInfo
        // content.appendChild(div); 
      }
      if(el.type == "floorplan"){
        await this.appendFloorplanToPreview(el.relevantInfo, content, vcr)
      }
    }, undefined);
  }

  // vcr is a an argument passed from the component 
  // because vcr has to be injected into a component,
  // since services are view agnostic.
  // if not, error will be thrown.
  // https://stackoverflow.com/questions/40636840/how-can-i-inject-viewcontainerref-into-a-service
  async appendFloorplanToPreview(floorplanId, content, vcr: ViewContainerRef){
    //// Refer: https://stackoverflow.com/questions/53646015/angular-component-in-a-browsers-child-window
        // create floorplan component instance
        const { FloorPlanComponent } = await import('../visualization/floor-plan/floor-plan.component');
        vcr.clear();
        const factory = this._cfr.resolveComponentFactory(FloorPlanComponent);
        const component: ComponentRef<any> = vcr.createComponent(factory);
        component.instance.lockDefects = true
        component.instance.selectedFloorplanId = floorplanId
        // add floorplan component into html
        content.appendChild(component.location.nativeElement);
        // load floorplan
        setTimeout(()=>{
          this._fs.loadFloorplanComponent()
        },10)
  }
  
  // Data Manipulation Methods //

  shiftUpReportEntry(index: number){
    [this._reportData.content[index], this._reportData.content[index-1]] = [this._reportData.content[index-1], this._reportData.content[index]];
    // console.log("shiftUpReportEntry")
    this._reportDataUpdated.next(this._reportData);
  }

  shiftDownReportEntry(index: number){
    [this._reportData.content[index], this._reportData.content[index+1]] = [this._reportData.content[index+1], this._reportData.content[index]];
    // console.log("shiftDownReportEntry")
    this._reportDataUpdated.next(this._reportData);
  }

}

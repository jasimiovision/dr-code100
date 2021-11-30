import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import previewCss from './previewCss.js'

import { GlobalService } from '../../general-services/global.service'

@Injectable({providedIn: 'root'})
export class TemplateDataService {
    private _allTemplates = [];
    private _templateData = {
        id:"",
        header_data:"",
        content: [],
        template_name: "",
        template_description: "",
        thumbnail_key:""
    };

    private _allTemplateDataUpdated = new Subject<any[]>();
    private _templateDataUpdated = new Subject<any>();
    
    constructor(
        private _http: HttpClient, 
        private _router: Router,
        public gs: GlobalService
        ) {}
    
    getAllTemplateDataUpdateListener =()=> this._allTemplateDataUpdated.asObservable();
    getTemplateDataUpdateListener =()=> this._templateDataUpdated.asObservable();

    //////////////////////////
    ///// REST Functions /////
    //////////////////////////

    // creates new template record from reportData, clones report thumbnail on S3
    createReportTemplate(reportData?){
        let templateName = prompt("Creating New Template... \nName: ", "Untitled");
        templateName = this.titleCase(templateName)

        const body = {
            header_data: reportData? reportData.header_data : "",
            content: reportData? reportData.content : [],
            template_name: templateName,
            template_description: reportData? reportData.template_description : ""
        }
        this._http.post<{message:any, newTemplate:any}>(environment.apiURL + "/template/cloneReport/" + reportData.id, body)
            .subscribe(
            (resData) => { 
                this.gs.loaded()
                window.alert(resData.message) 
                /// navigate to template page
                const templateId = resData.newTemplate._id
                this._router.navigate(['/template', templateId]);
            }
        )
    }
    createNewTemplate(templateName){
        templateName = this.titleCase(templateName)
        const body = { template_name: templateName}
        this._http.post<{message:any, newTemplate:any}>(environment.apiURL + "/template", body)
        .subscribe((res) => {
            this.gs.loaded()
            window.alert(res.message)
            /// navigate to template page
            const templateId = res.newTemplate._id
            this._router.navigate(['/template', templateId]);
        })
    }

    getAllTemplateData(role) {
        if (role=="client"){return}
        this._http.get<any[]>(environment.apiURL + "/template/all")
        .pipe(map((resData) => {
            return resData.map(tp => {
                return {
                ...tp,
                id: tp._id
                }
            })
        }))
        .subscribe((res) => {
            this._allTemplates = res;
            console.log("getAllTemplateData: ", res)
            this._allTemplateDataUpdated.next([... this._allTemplates]);
        },
        (error) => {
            console.error("getAllTemplateData: ", error)
            // this._router.navigate(["/home"])
        })
    }
    getTemplateData(templateId: string) {
        this._http.get<any>(environment.apiURL + "/template/" + templateId)
        .pipe(map((resData) => {
            resData.id = resData._id.toString();
            resData.content =  resData.content.map(el => {
              return {
                id: el._id.toString(),
                ... el
              }
            })
            return resData
          }))
        .subscribe((resData) => {
            this._templateData = resData
            console.log("getTemplateData: ", resData)
            // Shallow copy/assignment: Javascript reference types. 
            // Component and Service share same copy of data (resData)
            this._templateDataUpdated.next(resData);
        },
        (error) => {
            console.error("getTemplateData: ", error)
            // this._router.navigate(["/home"])
        })
    }

    saveTemplate(showResult=true){
        // console.log(this._templateData)
        const body = {
            header_data: this._templateData.header_data,
            content: this._templateData.content,
            template_name: this._templateData.template_name,
            template_description: this._templateData.template_description
        }
        this._http.put<{message: string}>(environment.apiURL + "/template/" + this._templateData.id, body)
        .subscribe(
          (resData) => {
            if(showResult){
              this.gs.loaded()
              window.alert(resData.message);
            }
          },
          (_) => {
            this.gs.loaded()
            window.alert("Fail to Save Template");
          }
        )
    } 

    updateThumbnail(thumbnailBlob){
        var form = new FormData();
        form.append("templateId", this._templateData.id)
        form.append("thumbnailImage", thumbnailBlob);
        // for (var pair of form.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
        this._http.post<{url: string}>(environment.apiURL + "/template/thumbnail", form)
        .subscribe(
          (resData) => { console.log(resData) }
        )
    } 

    deleteTemplate(templateName:string, templateId:string){
        this._http.delete<{message:any}>(environment.apiURL + "/template/" + templateId)
        .subscribe((res) => {
            this._allTemplates = this._allTemplates.filter(template => template.id !== templateId);
            this._allTemplateDataUpdated.next([...this._allTemplates]);
            alert(templateName + " deleted successfully");
        },
        (errData) => {
            alert("Fail to delete template: " + templateName);
        })
    }
    ////////////////////////////
    ///// Editor Utilities /////
    ////////////////////////////
    addTemplateEntry(){
        this._templateData.content.push({
            id: Date.now().toString(), // id placeholder just for deleteTemplateEntry by id purposes
            type: "editor",
            reportData: ""
        })
        console.log("addTemplateEntry: ", this._templateData)
        this._templateDataUpdated.next(this._templateData);
    }
    deleteReportEntry(id){
        this._templateData.content = this._templateData.content.filter(templateDataEntry => templateDataEntry.id !== id);
        this._templateDataUpdated.next(this._templateData);
    }
    shiftUpTemplateEntry(index){
        [this._templateData.content[index], this._templateData.content[index-1]] = [this._templateData.content[index-1], this._templateData.content[index]];
        this._templateDataUpdated.next(this._templateData);
    }
    shiftDownTemplateEntry(index){
        [this._templateData.content[index], this._templateData.content[index+1]] = [this._templateData.content[index+1], this._templateData.content[index]];
        this._templateDataUpdated.next(this._templateData);
    };
    generateTemplatePreview(template?){
        //////////// for generating preview window ////////////
        const templatePreviewData = template ? template : this._templateData
        // console.log(templatePreviewData)
        let newWindow = window.open();
        // clear existing window
        newWindow.document.body.innerHTML = "";
        // specify A4 dimensions padding: 25.4mm 31.7mm 25.4mm 31.7mm; 
        newWindow.document.write(previewCss) // append style tag
        newWindow.document.write("<body></body>") /// append body tag
        // Note: document.write applies to point of execution. appendChild() happens afterwards
        // https://stackoverflow.com/questions/1360869/how-to-use-html-to-print-header-and-footer-on-every-printed-page-of-a-document
        // specify repeated header
        newWindow.document.write(`<table class="report-container">
                                    <thead class="report-header"><tr><td>
                                        ${templatePreviewData.header_data}
                                    </td></tr></thead>
                                    <tbody><tr><td id="content">
                                    </td></tr></tbody>`)  

        let content = newWindow.document.getElementById("content")
        // populate template
        templatePreviewData.content.forEach(el => {
          if(el.type == "editor"){
            let div = newWindow.document.createElement('div');
            div.innerHTML = el.reportData
            content.appendChild(div); 
          }
        });
      }

    ////////////////////////////
    ///// Helper Functions /////
    ////////////////////////////
    titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you. Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }return splitStr.join(' '); 
    }

}
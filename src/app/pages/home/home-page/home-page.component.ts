import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { AuthService } from "../../../general-services/auth.service";
import { GlobalService } from "../../../general-services/global.service";
import { allProject } from "../../services/allProject.model";
import { AllProjectService } from "../../services/allProject.service";
import { TemplateDataService } from "../../services/templateData.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private _placeholderUrl = "../../../../assets/white-sq.png"

  // Sample Project List
  public allProject: allProject[];
  public allTemplates = [];
  public adminMode: boolean;
  public clientMode: boolean;
  
  public projectTypes = {
    "dr-one": "Dr.One",
    "report": "Report-only"
  }
  
  private _allProjectSub: Subscription;
  private _allTemplatesSub: Subscription;

  constructor(
    private http: HttpClient,
    private _router: Router,
    public gs: GlobalService,
    private _as: AuthService, 
    private _aps: AllProjectService, 
    private _ts: TemplateDataService
  ) { }

  ngOnInit(): void {
    this.gs.load()
    this.gs.role = this._as.getAuthData()["role"];
    this.gs.permission = this._as.getAuthData()["permission"];
    this.adminMode = (this.gs.role === "admin") ? true : false;
    this.clientMode = (this.gs.role === "client") ? true : false;

    this._allProjectSub = this._aps.getAllProjectUpdateListener()
      .subscribe((data: allProject[]) => {
        this.allProject = data;
        this.gs.loaded()
    });
    this._allTemplatesSub = this._ts.getAllTemplateDataUpdateListener()
      .subscribe((data) => {
        this.allTemplates = data;
        this.allTemplates.forEach(template => {
          if(!template.thumbnail_key){
            template.thumbnail_key = this._placeholderUrl
          }
        })
        this.gs.loaded()
    });
    this._aps.getAllProjectData(this.gs.role, this.gs.permission);
    this._ts.getAllTemplateData(this.gs.role)
  }

  ngOnDestroy(): void {
    this._allProjectSub.unsubscribe();
    this._allTemplatesSub.unsubscribe();
  }

  clickProject(project){
    this.gs.setProjectType(project.type)
    this._router.navigate(['/loading', project.id]);
  }
  clickTemplate(template){
    this._router.navigate(['/template', template.id]);
  }

  newProject(projectType:string){
    if (projectType == "dr-one"){
      this._router.navigate(['/upload']);
    } else if (projectType == "report"){
      const projName = prompt("Report-only Project Name: \n *Please provide a unique name. Once created, you will not be able to change the project name.", "Untitled");
      if (projName != null){
        this.gs.load()
        // create new report-only project
        this._aps.addReportProjectEntry(projName)
        // allProject service will stop loading and redirect to reportconfig page
      }      
    }
  }
  newTemplate(){
    this.gs.load()
    const templateName = prompt("Template Name: \n", "Untitled");
    if(templateName){ this._ts.createNewTemplate(templateName)}
    else{this.gs.loaded()}
    // template service will stop loading and redirect to template page
  }

  deleteProject(project){
    const deleteConfirmed = confirm("Are you sure you want to delete project: " + project.name + " ?")
    if (deleteConfirmed) {this._aps.deleteProjectEntry(project.name,project.id);}
  }
  deleteTemplate(template){
    const deleteConfirmed = confirm("Are you sure you want to delete template: " + template.template_name + " ?")
    if (deleteConfirmed) {this._ts.deleteTemplate(template.template_name, template.id)}
  }

  triggerRetraining(){
    alert("Preparing new data to S3...")
    this.http.post<any>(environment.apiURL + "/keyframe/retrain",{})
      .subscribe(res => {
          console.log(res)
      })
  }

}

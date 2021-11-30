import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public role: string;
  public permission: string[];
  
  public sideOpened = false;
  public sideNavOffset: number = 0;
  public loading = false;

  private projectType: string

  private title: string ="home";
  titleToRouteMap = {
    "report": "Report Editor",
    "report-config": "Report Configuration",
    "template": "Template Editor",
    "edit": "Defect Annotation",
    "visualization": "Defect Visualisation Overview",
    "upload": "Upload Project Information",
    "home": "Projects",
    "setting": "Project Settings",
    "admin": "Admin Dashboard"
  }
  constructor(
    private router: Router, 
    private http: HttpClient
    ) {}

  public sideToggle(){
    this.sideOpened = !this.sideOpened;
  }
  public load(){this.loading = true}
  public loaded(){this.loading = false}

  public getProjectType=()=>this.projectType
  public setProjectType=(type:string)=>{this.projectType=type}

  public isSideToggleInactive(){
    return (this.title === "home" || this.title === "admin")
  }

  public getPageTitle() {
    const extractedPage = this.router.url.split("/")[1];
    const pageTitle = this.titleToRouteMap[extractedPage];
    this.title = extractedPage;

    return pageTitle;
  }
}

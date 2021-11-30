import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GlobalService } from '../../general-services/global.service';
import { AuthService } from '../../general-services/auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // ALL 0 SHOULD BE REPLACED BY ProjectID
  myRoutes = [
    {
      id: "home",
      title: "", // will be updated by global service OnInit
      route: "/home",
      icon: "home",
      showClient: true,
      project_types:["dr-one", "report"]
    },
    {
      id: "edit",
      title: "", // will be updated by global service OnInit
      route: "/edit",
      icon: "rule_folder",
      showClient: false,
      project_types:["dr-one"]
    },
    {
      id: "visualization",
      title: "", // will be updated by global service OnInit
      route: "/visualization",
      icon: "preview",
      showClient: true,
      project_types:["dr-one"]
    },
    {
      id: "report",
      title: "", // will be updated by global service OnInit
      route: "/report",
      icon: "chrome_reader_mode",
      showClient: true,
      project_types:["dr-one", "report"]
    },
    {
      id: "report-config",
      title: "", // will be updated by global service OnInit
      route: "/report-config",
      icon: "settings",
      showClient: false,
      project_types:["dr-one", "report"]
    },
  ]

  public clientMode;

  private authListenerSubs: Subscription;

  constructor(private _gs: GlobalService, private _router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // Initialize the value if exist
    this.clientMode = this.authService.getAuthData()["role"] === "client";
    this.myRoutes.map(page => {
      page.title = this._gs.titleToRouteMap[page.id];
    })
    // Update new value on Listener
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.clientMode = this.authService.getAuthData()["role"] === "client";
    });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  navigate(page){
    const extractedURL = this._router.url.split("/");
    
    this._gs.sideToggle()
    if(page.title === "Home") {
      this._router.navigate([page.route]);
    } else {
    
      if(extractedURL.length == 4){
    
    const projectId = extractedURL[extractedURL.length - 2]
   
    this._router.navigate([page.route, projectId]);
    }else{
    const projectId = extractedURL[extractedURL.length - 1];
      this._router.navigate([page.route, projectId]);
    }
    }
  }

  availableRoutes(){
    let routes = this.myRoutes.filter( route => {
      return route.project_types.includes(this._gs.getProjectType()) 
    })
    routes = routes.filter( route => {
      return (!this.clientMode||this.clientMode === route.showClient)
    })
   // console.log(routes)
    return routes
  }
}

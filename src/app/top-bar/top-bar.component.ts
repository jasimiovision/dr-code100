import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GlobalService } from "../general-services/global.service";
import { AuthService } from '../general-services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, AfterViewInit {
  @ViewChild('toolBar', {read: ElementRef}) toolBar: ElementRef;

  // for clock display
  public date = new Date()
  public pageTitle: string;
  public userIsAuthenticated: boolean = false;
  public username: string;
  public isAdmin: boolean = false;

  private _interval;
  private authListenerSubs: Subscription;

  constructor(public router: Router, public gs:GlobalService, public authService: AuthService) { }

  // Need to modify to acquire page title by routes

  ngOnInit(): void {
    // get current time for clock
    this._interval = window.setInterval(() => {
			this.date = new Date()
    }, 1000)

    // Initialize the value if exist
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.username = this.authService.getAuthData()["username"];
    this.isAdmin = this.authService.getAuthData()["role"] === "admin";

    // Update new value on Listener
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.username = this.authService.getAuthData()["username"];
      this.isAdmin = this.authService.getAuthData()["role"] === "admin";
    });

    // this.pageTitle = this.gs.getPageTitle();
  }
  ngAfterViewInit(): void {
    // This makes sense to me but somehow it is conflicting with Angular's lifecycle hook
    this.gs.sideNavOffset = this.toolBar.nativeElement.offsetHeight;
  }
  ngOnDestroy() {
    if (this._interval) window.clearInterval(this._interval)
    this.authListenerSubs.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}

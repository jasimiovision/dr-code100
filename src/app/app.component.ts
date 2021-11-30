import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { GlobalService } from "./general-services/global.service";
import { AuthService } from "./general-services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // To obtain the topBar component
  @ViewChild('topBar', {read: ElementRef}) topBar: ElementRef;

  constructor(private authService: AuthService, public gs: GlobalService){}

  ngOnInit() {
    this.authService.autoAuthUser();
  }

}

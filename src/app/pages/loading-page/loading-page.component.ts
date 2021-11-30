import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AllProjectService } from '../services/allProject.service';
import { GlobalService } from '../../general-services/global.service'

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  constructor(private allProjectService: AllProjectService, 
              private _router: Router,
              public gs: GlobalService) { }

  ngOnInit(): void {
    const extractedURL = this._router.url.split("/");
    const projectId = extractedURL[extractedURL.length - 1];
    this.allProjectService.checkProjectOutputLoadedStatus(projectId);
  }

}

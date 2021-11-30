import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { sliderValue } from '../slideVal.model';
import { sliderValueService } from '../slideVal.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent implements OnInit, OnDestroy {
  values: sliderValue[] = [];
  isLoading = false;
  private slideValSub: Subscription;

  constructor(public sliderValueService: sliderValueService) { }

  ngOnInit() {
    this.isLoading = true;
    this.sliderValueService.getSliderValues();
    // can return 3 types of fund: next, error, complete
    this.slideValSub = this.sliderValueService.getslideValUpdateListener()
      .subscribe((values: sliderValue[]) => {
        this.values = values;
        this.isLoading = false;
      });
  }

  onDelete(id: string) {
    this.sliderValueService.deleteSliderValue(id);
  }

  ngOnDestroy() {
    this.slideValSub.unsubscribe();
  }

}

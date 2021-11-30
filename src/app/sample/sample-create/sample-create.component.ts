import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { sliderValue } from '../slideVal.model'
import { sliderValueService } from '../slideVal.service';


@Component({
  selector: 'app-sample-create',
  templateUrl: './sample-create.component.html',
  styleUrls: ['./sample-create.component.scss']
})
export class SampleCreateComponent implements OnInit {
  slideVal: sliderValue;
  private mode = "create";
  private urlID: string;

  constructor(public sliderValueService: sliderValueService, public route: ActivatedRoute) { }

  ngOnInit() {
    // Dynamic rendering of the same component of different data ID (avoids re-rendering of the whole component)
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.urlID = paramMap.get("id");
        this.sliderValueService.getSingleSliderValue(this.urlID).subscribe(slideVal => {
          this.slideVal = {id: slideVal._id, player: slideVal.player, value: slideVal.slider_value}
        })
      } else {
        this.mode = "create";
        this.urlID = null;
      }
    });
    console.log(this.mode);
  }

  onBtnClick(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const val: sliderValue = {
      "id": null,
      "player": form.value.player,
      "value": (form.value.sliderValue | 0)
    }

    if (this.mode === "create") {
      this.sliderValueService.addSliderValue(val);
    } else {
      val.id = this.urlID;
      this.sliderValueService.updateSliderValue(val);
    }

    form.resetForm();
  }

}

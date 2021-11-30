import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';     // Angular proper war of redirecting (re-rendering)

import { sliderValue } from './slideVal.model';

// an alternative to this is to go to app.module.ts, import the necessary service
// and add it under 'providers'
@Injectable({providedIn: 'root'})
export class sliderValueService {
  private sliderValues: sliderValue[] = [];
  private slideValUpdated = new Subject<sliderValue[]>();

  constructor (private http: HttpClient, private router: Router) {}

  // a required func to return Subject as it is defined as private
  getslideValUpdateListener() {
    return this.slideValUpdated.asObservable();
  }

  getSliderValues() {
    this.http.get<{ message: string, data:any }>('http://localhost:3000/api/slider-data')
    .pipe(map((resData) => {
      return resData.data.map(sliderData => {
        return {
          player: sliderData.player,
          value: sliderData.slider_value,
          id: sliderData._id
        }
      })
    }))
    .subscribe((transformedSliderData) => {
      this.sliderValues = transformedSliderData;
      this.slideValUpdated.next([...this.sliderValues]);
    });
  }

  getSingleSliderValue(id: string) {
    // Not able to return a single post due to ascrynhronous http client call (cannot return inside subscription)
    // Return the full subscription object instead to the component
    return this.http.get<{_id, player, slider_value}>("http://localhost:3000/api/slider-data/" + id);
  }

  addSliderValue(sliderValue: sliderValue) {
    this.http.post<{message, id}>("http://localhost:3000/api/slider-data", sliderValue)
      .subscribe((resData) => {     // will execute asynchronously upon successful post request
        console.log(resData.message);

        // To update sliderValues in the front-end
        const newSliderValue = {id: resData.id, player: sliderValue.player, value: sliderValue.value}
        this.sliderValues.push(newSliderValue);
        // convention in typescript to create copy quickly
        this.slideValUpdated.next([...this.sliderValues]);
        this.router.navigate(["/sample"])
      });
  }

  updateSliderValue(sliderValue: sliderValue) {
    this.http.put<{message}>("http://localhost:3000/api/slider-data/" + sliderValue.id, sliderValue)
      .subscribe((resData) => {
        console.log(resData.message);

        //To update sliderValues in the front-end
        const updatedSliderValue = [...this.sliderValues];
        const oldIndex = updatedSliderValue.findIndex((data) => data.id === sliderValue.id);
        updatedSliderValue[oldIndex] = sliderValue;
        this.sliderValues = updatedSliderValue;
        this.slideValUpdated.next([...this.sliderValues]);
        this.router.navigate(["/sample"])
      });
  }

  deleteSliderValue(id: string) {
    this.http.delete<{message}>("http://localhost:3000/api/slider-data/" + id)
      .subscribe((resData) => {
        console.log(resData.message);
        this.sliderValues = this.sliderValues.filter(sliderValue => sliderValue.id !== id);
        this.slideValUpdated.next([...this.sliderValues]);
      });
  }
}

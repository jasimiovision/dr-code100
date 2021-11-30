import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// an alternative to this is to go to app.module.ts, import the necessary service
// and add it under 'providers'
@Injectable({providedIn: 'root'})
export class imageService {

  constructor (private http: HttpClient) {}

  getImageSrc(imageId: string){
    return this.http.post<{imageURL: string}>("http://localhost:3000/api/image/get-image", {"imageId": imageId});

  }

  uploadImageSrc(image: File){
    const imageData = new FormData();
    imageData.append("imageFile", image, "testproject/floorplan/floorplan1.jpg");
    console.log(imageData);
    this.http.post<{message: string}>("http://localhost:3000/api/image/upload-image", imageData)
      .subscribe(responseData => {
        console.log(responseData.message);
      })
  }

  deleteImageSrc(){

  }

}

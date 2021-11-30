import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { imageService } from '../image.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {

  public fileId: string;
  public imgURL: string;

  constructor(public imageService: imageService ) { }

  ngOnInit(): void {
  }

  onRetrieveImage(form: NgForm){
    if (form.invalid) {
      return;
    }

    console.log(form.value.fileId);
    this.imageService.getImageSrc(form.value.fileId)
      .subscribe(
        (resData) => {
          console.log(resData.imageURL);
          this.imgURL = resData.imageURL;
        },
        (err) => {
          console.log(err);
          alert("your input file does not exist in S3");
        }
      );
  }

}

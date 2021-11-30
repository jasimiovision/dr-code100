import { Component, OnInit } from '@angular/core';

import { imageService } from '../image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  public isNotImage: boolean = false;
  public imagePreview: string;

  constructor(public imageService: imageService) { }

  ngOnInit(): void {
  }

  onUploadImage(imageInput: any){
    if(this.imagePreview === '' || !this.imagePreview || this.isNotImage) {
      return
    }

    console.log("SUBMITTED");
    console.log(this.imagePreview);

    const file: File = imageInput.files[0];
    this.imageService.uploadImageSrc(file);

    // To reset form
    this.imagePreview = '';
  }

  onImagePicked(imageInput: any){
    const file: File = imageInput.files[0];

    if(!file){
      this.imagePreview = '';
      return
    }

    var fileType = file.type.split("/")[0];
    if (fileType !== "image"){
      this.isNotImage = true;
      return
    } else {
      this.isNotImage = false;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}

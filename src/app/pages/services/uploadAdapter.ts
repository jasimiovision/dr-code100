// Refer to: 
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html

import { environment } from '../../../environments/environment';

export class UploadAdapter {
  public loader: any;
  public url: string;
  public folderName: string = "test";
  public xhr: XMLHttpRequest;
  public token: string;

  constructor(loader, folderName, report=true) {
    this.loader = loader;
    this.folderName = folderName
    // change "environment.BASE_URL" key and API path
    if(report){
        this.url = environment.apiURL + "/report/report-image"
    } else {
        this.url = environment.apiURL + "/template/template-image"
    }

    // change "token" value with your token
    // this.token = localStorage.getItem("token");
  }

  upload() {
    return new Promise(async (resolve, reject) => {
      this.loader.file.then((file) => {
        this._initRequest();
        this._initListeners(resolve, reject, file);
        this._sendRequest(file);
      });
    });
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open("POST", this.url, true);
    // change "Authorization" header with your header
    // xhr.setRequestHeader("Authorization", this.token);
    xhr.setRequestHeader("FolderName", this.folderName);
    xhr.responseType = "json";
  }

  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = "Couldn't upload file:" + ` ${file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());

    xhr.addEventListener("load", () => {
      const response = xhr.response;
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }
      // change "response.data.fullPaths[0]" with image URL
      resolve({
        default: response.url,
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  _sendRequest(file) {
    const data = new FormData();
    // change "attachments" key
    data.append("image_file", file);
    this.xhr.send(data);
  }
}

import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload/';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'video-file'});
  
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('File uploaded:', item, status, response);
      if(status == 200){
        alert("File Upload Successful.");
      }else{
        alert("File Upload Failed. Error code: "+status);
      }
     };
  }

}

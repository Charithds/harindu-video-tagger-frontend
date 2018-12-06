import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public file:File;
  private save_location = "./uploads/"
  
  constructor() { }

  saveFile(){
    console.log("in here"+this.file);
    let fileReader = new FileReader();
    fileReader.onload = (event) => {
      var blob = new Blob(fileReader.result, {type: this.file.type});
      saveAs(blob, this.save_location+this.file.name);
      // writeFile(this.save_location+this.file.name, fileReader.result, function(err){
      //   if(err){
      //     return console.log(err);
      //   }
      // });
    }
    fileReader.readAsArrayBuffer(this.file);
    console.log("done");
  }

  fileChanged(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  ngOnInit() {
  }
}

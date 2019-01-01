import { Component } from '@angular/core';
import { Video } from './video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Video Activity Detection';
  selectedVideo: Video;

  videoSelectedHandler(selectedVideo:Video) {
    this.selectedVideo = selectedVideo;
    console.log(selectedVideo);
  }
}

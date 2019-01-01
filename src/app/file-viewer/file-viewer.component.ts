import { Component, OnInit, Output } from '@angular/core';
import { Video} from '../video';
import { VideoPlaylistService } from '../video-playlist.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {
  videos: Video[];
  selectedVideo: Video;
  @Output() videoSelected: EventEmitter<Video> = new EventEmitter<Video>(); 

  constructor(private videoplaylistService: VideoPlaylistService) { }

  getVideos(){
    this.videoplaylistService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
    this.getVideos();
  }

  public onItemHover(id){
    console.log("onItemHover");
    this.selectedVideo = this.videos[id];
    this.videoSelected.emit(this.selectedVideo);
  }
}

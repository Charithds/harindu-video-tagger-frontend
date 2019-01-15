import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoPlaylistService {
  video_list_URL = 'http://localhost:8000/api/files';

  constructor(private http: HttpClient) { }

  getVideos(){
    var x = this.http.get<Video[]>(this.video_list_URL);
    console.log(x);
    return x;
  }
}

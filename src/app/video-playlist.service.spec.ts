import { TestBed } from '@angular/core/testing';

import { VideoPlaylistService } from './video-playlist.service';

describe('VideoPlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoPlaylistService = TestBed.get(VideoPlaylistService);
    expect(service).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../providers/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSelected: any;
  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe((videos: any) => {
      console.log(videos);
      this.videos = videos;
    });
  }

  ngOnInit() {}

  watchVideo(video: any): void {
    this.videoSelected = video;
    $('#mymodal').modal();
  }

  closeModal(): void {
    this.videoSelected = null;
    $('#mymodal').modal('hide');
  }

  loadMoreVideos() {
    this.youtubeService.getVideos().subscribe((videos: any) => this.videos.push.apply(this.videos, videos));
  }
}

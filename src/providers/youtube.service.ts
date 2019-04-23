import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EYoutube } from 'src/enums/youtube.enum';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private nextToken = '';
  constructor(public http: HttpClient) {}

  getVideos(): Observable<any> {
    const url = `${EYoutube.youtubeUrl}/playlistItems`;
    let params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('channelId', EYoutube.channelId)
      .set('key', EYoutube.apiKey)
      .set('playlistId', EYoutube.playlist);

    if (this.nextToken) {
      params = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '10')
        .set('channelId', EYoutube.channelId)
        .set('key', EYoutube.apiKey)
        .set('playlistId', EYoutube.playlist)
        .set('pageToken', this.nextToken);
    }
    return this.http.get(url, { params }).pipe(
      map((data: any) => {
        // console.log(data);
        this.nextToken = data.nextPageToken;
        const videos: any = [];
        for (const video of data.items) {
          const snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}

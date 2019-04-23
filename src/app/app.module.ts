import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { VideoYoutubePipe } from '../pipes/video-youtube.pipe';
import { YoutubeService } from '../providers/youtube.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, VideoYoutubePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NewsService } from '../../services/news.service';
import { Footer3Component } from '../footer3/footer3.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule, NewsCardComponent,Footer3Component,LoaderComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  newsItems:any[]=[];
  flag = false;
  constructor(private http: HttpClient,private newService:NewsService) {
  newService.news$.subscribe(response => {
    this.newsItems = response;
    this.flag = true;
    console.log("Here",this.flag);
  })
  }
}

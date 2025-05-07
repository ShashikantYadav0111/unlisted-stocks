import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  newsItems:any[]=[];
  constructor(private http: HttpClient,private newService:NewsService) {
    newService.news$.subscribe(response => this.newsItems = response)
    console.log(this.newsItems)
  }
  
}

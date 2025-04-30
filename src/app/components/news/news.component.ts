import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  newsItems:any[]=[];
  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://stockapp-backend-1at5.onrender.com/news/get-all').subscribe(response => {
      
          this.newsItems = response;
          console.log(this.newsItems)
    });
  }
  
}

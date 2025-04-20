import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsCardComponent } from "../news-card/news-card.component";

@Component({
  selector: 'app-news',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<any>('https://newsdata.io/api/1/news?apikey=pub_81454b1f9e3ef9d5ed462b2d559d9188fe679&q=ipo%20india').subscribe(response => {
      this.newsItems = response.results;
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { TruncatePipe } from '../../truncate.pipe';

@Component({
  selector: 'app-news-back',
  imports: [CommonModule,TruncatePipe],
  templateUrl: './news-back.component.html',
  styleUrl: './news-back.component.scss'
})
export class NewsBackComponent {
  @Input() newsItem:any =  {};
  newsService = inject(NewsService)
  deleteNews(id:string){
    console.log(id)
    this.newsService.deleteNews(id).subscribe({
      next: () => console.log('News Deleted, store refreshed'),
      error: err => console.error(err)
    });
  }

}

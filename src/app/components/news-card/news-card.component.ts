import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { TruncatePipe } from '../../truncate.pipe';

@Component({
  selector: 'app-news-card',
  imports: [CommonModule,TruncatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() newItem:any={};
  newsService = inject(NewsService)
  updateLike(id:string){
    this.newsService.updateNews(id).subscribe({
      next: () => console.log('Like updated, store refreshed'),
      error: err => console.error(err)
    });
  }
}

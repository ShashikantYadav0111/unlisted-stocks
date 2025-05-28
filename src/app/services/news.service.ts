import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

interface News{
  _id:string;
  title:string;
  imageUrl: string;
  description: string;
  newsUrl: string;
  date: string;
  likes: number;
  views: number;
  __v:number;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly API_URL = 'https://stockapp-backend-1at5.onrender.com/news';
  // private readonly API_URL = 'http://localhost:3000/news';
  private readonly STORAGE_KEY = 'cachedNews';

  // 1) Our in‑memory store:
  private newsSubject = new BehaviorSubject<any[]>(this.loadFromStorage());
  // 2) Exposed as readonly Observable
  news$: Observable<News[]> = this.newsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchNews();
  }

  /** Fetch from API and update the store */
  fetchNews(): any{
    this.http
      .get<News[]>(`${this.API_URL}/get-all`)
      .pipe(
        tap((news) => {
          this.newsSubject.next(news);
          this.saveToStorage(news);
        }),
        catchError((err) => {
          console.error('News fetch failed', err);
          return of([]); // on error, leave store unchanged
        })
      )
      .subscribe();
  }

  addOneNews(payload: any) {
    this.http.post(`${this.API_URL}/add-one`, payload).subscribe(response=>{
      console.log(response);
    })
    this.fetchNews();
  }

  updateNews(id: string):Observable<News[]> {
    return this.http
      .post<News[]>(`${this.API_URL}/update-one`, { id })
      .pipe(
        tap(() => this.fetchNews())
      );
  }
  deleteNews(id: string):Observable<News[]> {
    return this.http
      .post<News[]>(`${this.API_URL}/delete`, { id })
      .pipe(
        tap(() => this.fetchNews())
      );
  }
  /** Helper: load from localStorage if present */
  private loadFromStorage(): any[] {
    const json = localStorage.getItem(this.STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  }

  /** Helper: persist to localStorage */
  private saveToStorage(news: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(news));
  }
}

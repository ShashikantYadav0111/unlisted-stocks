import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private readonly API_URL = 'https://stockapp-backend-1at5.onrender.com/stock/get-all';
  private readonly STORAGE_KEY = 'cachedStocks';

  // 1) Our in‑memory store:
  private stockSubject = new BehaviorSubject<any[]>(this.loadFromStorage());
  // 2) Exposed as readonly Observable
  stocks$: Observable<any[]> = this.stockSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchStocks();
  }

  /** Fetch from API and update the store */
  fetchStocks(): void {
    this.http.get<any[]>(this.API_URL).pipe(
      tap(stocks => {
        this.stockSubject.next(stocks);
        this.saveToStorage(stocks);
      }),
      catchError(err => {
        console.error('stocks fetch failed', err);
        return of([]);  // on error, leave store unchanged
      })
    ).subscribe();
  }

  /** Helper: load from localStorage if present */
  private loadFromStorage(): any[] {
    const json = localStorage.getItem(this.STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  }

  /** Helper: persist to localStorage */
  private saveToStorage(stocks: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stocks));
  }
}

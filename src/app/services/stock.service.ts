import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private readonly API_URL = 'https://stockapp-backend-1at5.onrender.com/stock';
  // private readonly API_URL = 'http://localhost:3000/stock';
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
    this.http
      .get<any[]>(`${this.API_URL}/get-all`)
      .pipe(
        tap((stocks) => {
          this.stockSubject.next(stocks);
          this.saveToStorage(stocks);
        }),
        catchError((err) => {
          console.error('stocks fetch failed', err);
          return of([]); 
        })
      )
      .subscribe();
  }

  addStock(payload: any) {
    this.http.post(`${this.API_URL}/add`, payload).subscribe((response) => {
      
    });
    this.fetchStocks();
  }
  updateStock(payload:any) {
    console.log(payload);
    this.http.put(`${this.API_URL}/update`,payload).subscribe((response) => {
      
    });
    this.fetchStocks();
  }
  deleteStock(payload: any) {
    this.http.post(`${this.API_URL}/delete`, payload).subscribe((response) => {
      
    });
    this.fetchStocks();
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
//this.http.get<any[]>('./assets/output2.json').pipe(

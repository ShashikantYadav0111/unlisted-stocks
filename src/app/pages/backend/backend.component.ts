import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsBackComponent } from '../../components/news-back/news-back.component';
import { StockService } from '../../services/stock.service';
import { StockBackComponent } from '../../components/stock-back/stock-back.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-backend',
  imports: [ReactiveFormsModule, CommonModule,NewsBackComponent,StockBackComponent,FormsModule],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss',
})
export class BackendComponent {
  rawJson:string='';
  articleForm: FormGroup;
  stockForm:FormGroup;
  isSubmited = false;
  isStockSubmited = false;
  newsItems: any[] = [];
  stocks: any[] = [];

  constructor(private fb: FormBuilder, private newsService: NewsService,private stockService: StockService ,private http:HttpClient) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern('(http[s]?:\\/\\/.*\\.(?:png|jpg|jpeg|gif|svg))'),
        ],
      ],
      newsUrl: [
        '',
        [Validators.required, Validators.pattern('(http[s]?:\\/\\/.*)')],
      ],
    });

    this.stockForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      mcap: ['', Validators.required],
      pe: ['', Validators.required],
      roce: ['', Validators.required],
      roe: ['', Validators.required],
      sector: ['', Validators.required]
    });

    newsService.news$.subscribe((response) => {
      this.newsItems = response;
    });
    stockService.stocks$.subscribe((response) => {
      this.stocks = response;
    });
  }

  async onSubmitNews() {
    if (this.articleForm.valid) {
      console.log(this.articleForm.value);
      this.isSubmited = true;
      this.newsService.addOneNews(this.articleForm.value);
      await this.sleep(3000);
      this.isSubmited = false;
      // You can emit or send this data to a backend API
    }
  }

 
  async onSubmit(){
    if (this.stockForm.valid) {
      this.isStockSubmited = true;
      this.stockService.addStock(this.stockForm.value);
      await this.sleep(3000);
      this.isStockSubmited = false;
      // You can emit or send this data to a backend API
    }
  }

  submitStocks(){
    try {
      const parsed = JSON.parse(this.rawJson);

      if (!Array.isArray(parsed)) {
        alert('Invalid input: must be a JSON array.');
        return;
      }

      this.http.post('http://localhost:3000/stock/bulk-add', parsed).subscribe({
        next: () => {
          alert('Stocks added successfully!');
          this.rawJson = '';
        },
        error: (err) => {
          console.error(err);
          alert('Failed to add stocks');
        }
      });
    } catch (e) {
      alert('Invalid JSON format');
    }
  }
  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

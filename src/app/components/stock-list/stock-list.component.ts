import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuoteFormComponent } from "../quote-form/quote-form.component";

@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss',
})
export class StockListComponent {
  showForm = false;

  stocks: any[] = [];
  filteredStocks: any[] = [];

  // Filters
  selectedSectors: string[] = [];

  // Dynamic Options
  allSectors: string[] = [];

  searchQuery = '';

  constructor(private http: HttpClient) {
    this.http.get('assets/screener.csv', { responseType: 'text' }).subscribe(csvData => {
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          this.stocks = result.data;


          // Auto-populate sector and cap filters
          this.allSectors = [...new Set(this.stocks.map(stock => stock.sector.toUpperCase()))];

          this.applyFilters();
        }
      });
    });
  }

  toggleSelection(value: string, list: string[]) {
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    this.applyFilters();
  }

  applyFilters() {
    const query = this.searchQuery.toUpperCase().trim();

    this.filteredStocks = this.stocks.filter(stock => {
      const matchSearch = stock.name.toUpperCase().includes(query);
      const matchSector = this.selectedSectors.length === 0 || this.selectedSectors.includes(stock.sector.toUpperCase());
      return matchSearch && matchSector ;
    });
  }
}


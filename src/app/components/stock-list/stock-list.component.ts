import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuoteFormComponent } from "../quote-form/quote-form.component";
import { FloatingWhatsappComponent } from "../floating-whatsapp/floating-whatsapp.component";

@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, FormsModule, FloatingWhatsappComponent],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss',
})
export class StockListComponent {
  showForm = false;
  contactInfo2 = { 
    phoneNo:'+91 9814003436',
    email:'unlistedequities@gmail.com',
    address:''
  }

  stocks: any[] = [];
  filteredStocks: any[] = [];

  // Filters
  selectedSectors: string[] = [];

  // Dynamic Options
  allSectors: string[] = [];

  searchQuery = '';

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://stockapp-backend-1at5.onrender.com/stock/get-all').subscribe(response => {
      
          this.stocks = response;

          this.allSectors = [...new Set(this.stocks.map(stock => stock.sector.toUpperCase()))];

          this.applyFilters();
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


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FloatingWhatsappComponent } from '../floating-whatsapp/floating-whatsapp.component';
import { StockService } from '../../services/stock.service';
import { Footer3Component } from '../footer3/footer3.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  imports: [
    CommonModule,
    FormsModule,
    FloatingWhatsappComponent,
    Footer3Component,
  ],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss',
})
export class StockListComponent {
  showForm = false;
  contactInfo2 = {
    phoneNo: '+91 9814003436',
    email: 'unlistedequities@gmail.com',
    address: '',
  };

  stocks: any[] = [];
  filteredStocks: any[] = [];
  // Filters
  selectedSectors: string[] = [];

  // Dynamic Options
  allSectors: string[] = [
    'HOTELS',
    'PHARMA',
    'MANUFACTURING',
    'FINANCE',
    'HOSPITALS',
    'CONSUMER',
    'ENERGY',
    'SERVICES',
    'ELECTRONICS',
    'CONSTRUCTION',
    'FINTECH',
    'FORGING',
    'EXCHANGE',
    'INSURANCE',
    'ENGINEERING',
    'AGRICULTURE',
    'METAL',
    'PACKAGING',
    'BANKING',
    'IT',
    'CHEMICAL',
    'INVESTMENT',
    'EDTECH',
    'HEALTHCARE',
    'POWER',
    'FMCG',
    'STEEL',
    'MINING',
    'AIRPORTS',
    'TRADING',
    'MISCELLANEOUS',
    'SPORTS',
    'DEFENCE',
    'HOLDINGS',
  ];

  searchQuery = '';

  constructor(private http: HttpClient, private stockService: StockService,private router:Router) {
    stockService.stocks$.subscribe((response) => {
      this.stocks = response;
    });
    this.applyFilters();
  }

  toggleSelection(value: string, list: string[]) {
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    this.applyFilters();
  }

  applyFilters() {
    const query = this.searchQuery.toUpperCase().trim();
    this.filteredStocks = this.stocks.filter((stock) => {
      const matchSearch = stock.name.toUpperCase().includes(query);
      const matchSector =
        this.selectedSectors.length === 0 ||
        this.selectedSectors.includes(stock.sector.toUpperCase());
      return matchSearch && matchSector;
    });
  }
  form = { fullname: '', phoneNo: '', email: '' };

  handleClick() {
      this.router.navigate(['/contact']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Stock {
  name: string;
  price: number;
}
@Component({
  selector: 'app-stock',
  imports: [CommonModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  @Input() stockData!: Stock;
  
}

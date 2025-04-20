import { Component } from '@angular/core';
import { StockListComponent } from "../../components/stock-list/stock-list.component";

@Component({
  selector: 'app-stocks',
  imports: [StockListComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {

}

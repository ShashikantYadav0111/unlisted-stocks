import { Component } from '@angular/core';
import { StockListComponent } from "../../components/stock-list/stock-list.component";
import { Footer3Component } from "../../components/footer3/footer3.component";

@Component({
  selector: 'app-stocks',
  imports: [StockListComponent, Footer3Component],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {

}

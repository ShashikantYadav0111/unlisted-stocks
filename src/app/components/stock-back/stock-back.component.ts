import { Component, inject, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../truncate.pipe';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-back',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './stock-back.component.html',
  styleUrl: './stock-back.component.scss',
})
export class StockBackComponent {
  newPrice:number=0;
  @Input() stockItem: any = {};
  stockService = inject(StockService);
  priceForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.priceForm = fb.group({
      id:[''],
      newPrice:['',Validators.required]
    })
  }

  updatePrice(){
    this.priceForm.value.id = this.stockItem._id;
    if(!this.priceForm.invalid){
      this.stockService.updateStock(this.priceForm.value);
    }
  }
   deleteStock(id:string){
    console.log(id)
    this.stockService.deleteStock({id});
  }
}

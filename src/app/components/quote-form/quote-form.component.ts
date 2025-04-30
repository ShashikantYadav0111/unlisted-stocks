import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  imports: [CommonModule],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss'
})
export class QuoteFormComponent {
  showForm = false;
  contactInfo2 = { 
    phoneNo:'+91 9814003436',
    email:'unlistedequities@gmail.com',
    address:''
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-whatsapp',
  imports: [],
  templateUrl: './floating-whatsapp.component.html',
  styleUrl: './floating-whatsapp.component.scss'
})
export class FloatingWhatsappComponent {
  whatsappNumber: string = '919814003436'; // <-- Change this to your number

  get whatsappLink(): string {
    return `https://wa.me/${this.whatsappNumber}`;
  }
}

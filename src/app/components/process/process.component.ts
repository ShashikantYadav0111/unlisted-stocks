import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  process = [
    {
      title: 'Browse',
      description: 'Browse our curated unlisted share opportunities'
    },
    {
      title: 'Contact',
      description: 'Express interest via the form or WhatsApp'
    },
    {
      title: 'Confirmation',
      description: 'Our team confirms availability and execution timelines'
    },
    {
      title: 'Transaction',
      description: 'Transaction is conducted privately via our proprietary desk or partner network'
    }
  ];
}

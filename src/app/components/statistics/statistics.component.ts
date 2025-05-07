import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '2000+', label: 'Happy Customers' },
    { value: '1100+', label: 'Deals Facilitated' },
    { value: '98%', label: 'Client Satisfaction' }
  ];
}

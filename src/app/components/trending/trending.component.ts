import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-trending',
  imports: [CommonModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    AOS.init({
      duration: 1200,  // animation duration (ms)
      once: true,      // whether animation should happen only once - while scrolling down
    });
  }

  companies = [
    {
      name: 'Lava International',
      sector: 'Consumer Durables',
      image: './trending/lava.webp',
    },
    {
      name: 'B9 Beverages (BIRA 91)',
      sector: 'FMCG',
      image: './trending/bira.webp',
    },
    { name: 'Vikram Solar', sector: 'Energy', image: './trending/vikram.webp' },
    {
      name: 'Imagine Marketing (boAt)',
      sector: 'Consumer Durables',
      image: './trending/boat.webp',
    },
    {
      name: 'Oravel Stays (OYO Rooms)',
      sector: 'Hospitality',
      image: './trending/oyo.webp',
    },
    {
      name: 'HDB Financial Services',
      sector: 'Financial Services',
      image: './trending/hdb.webp',
    },
    {
      name: 'API Holdings(Pharmeasy)',
      sector: 'Health Care',
      image: './trending/pharmeasy.webp',
    },
    {
      name: 'SBI Funds Management',
      sector: 'Financial Services',
      image: './trending/sbi.webp',
    },
    {
      name: 'Polymatech Electronics',
      sector: 'Electronics',
      image: './trending/polymatech.webp',
    },
    {
      name: 'TATA Capital',
      sector: 'Financial Services',
      image: './trending/tata.webp',
    },
  ];

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}

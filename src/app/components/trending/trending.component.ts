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
      name: 'TATA Capital',
      sector: 'Financial Services',
      image: './trending/tata.webp',
    },
    {
      name: 'Vikram Solar',
      sector: 'Energy',
      image: './trending/vikram.webp',
    },
    { name: 'NSE India Limited', sector: 'Stock Exchange', image: './trending/nse.webp' },
    {
      name: 'Metropolitan Stock Exchange',
      sector: 'Stock Exchange',
      image: './trending/metro.webp',
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
      name: 'Philips India',
      sector: 'Health Care',
      image: './trending/philips.webp',
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
      name: 'Chennai Super Kings',
      sector: 'Sports',
      image: './trending/csk.png',
    },
    {
      name: 'Taparia Tools Limited',
      sector: 'Manufacturing ',
      image: './trending/taparia.webp',
    },
    {
      name: 'Bira Beverages (BIRA 91)',
      sector: 'Consumer Staples',
      image: './trending/bira.webp',
    }
  ];

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}

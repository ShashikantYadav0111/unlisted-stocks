import { Component } from '@angular/core';
import { TickerComponent } from '../../components/ticker/ticker.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { NewsComponent } from '../../components/news/news.component';
import { TrendingComponent } from '../../components/trending/trending.component';
import { FloatingWhatsappComponent } from "../../components/floating-whatsapp/floating-whatsapp.component";
import { WhyComponent } from '../../components/why/why.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { ProcessComponent } from '../../components/process/process.component';
import { DiscComponent } from '../disc/disc.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    TestimonialsComponent,
    TrendingComponent,
    TickerComponent,
    StatisticsComponent,
    FloatingWhatsappComponent,
    WhyComponent,
    ProcessComponent,
    DisclaimerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) { }

  contactInfo2 = { 
    phoneNo:'9814003436',
    email:'unlistedequities@gmail.com',
    address:''
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
  
}


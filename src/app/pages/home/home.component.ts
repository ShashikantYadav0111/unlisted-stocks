import { Component } from '@angular/core';
import { TickerComponent } from '../../components/ticker/ticker.component';
import { CommonModule } from '@angular/common';
import { StockListComponent } from '../../components/stock-list/stock-list.component';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { NewsComponent } from '../../components/news/news.component';
import { TrendingComponent } from '../../components/trending/trending.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { QuoteFormComponent } from "../../components/quote-form/quote-form.component";
import { FloatingWhatsappComponent } from "../../components/floating-whatsapp/floating-whatsapp.component";
import { WhyComponent } from '../../components/why/why.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    TestimonialsComponent,
    NewsComponent,
    TrendingComponent,
    TickerComponent,
    
    FloatingWhatsappComponent,
    WhyComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  contactInfo2 = { 
    phoneNo:'+91 9814003436',
    email:'unlistedequities@gmail.com',
    address:''
  }
  contentData = [
    {
      heading: '🔍 What are Unlisted Stocks?',
      content:
        'Shares of companies not traded on public stock exchanges like NSE or BSE.',
    },
    {
      heading: '🏗️ Often Belong to Startups or Pre-IPO Companies',
      content:
        'Includes growing businesses, unicorn startups, and emerging ventures.',
    },
    {
      heading: '📈 Early Investment Opportunity',
      content: 'Potential to invest before IPO — enter early, exit big.',
    },
    {
      heading: ' 🧠 Less Known, More Rewarding',
      content: 'Lower competition + price discovery = high growth potential.',
    },
    {
      heading: '🚪 Exclusive Access',
      content:
        'Generally available through private placements or broker platforms.',
    },
  ];
  bannerNo: number = 1;
  imageUrl = `./backgrounds/background${this.bannerNo}.png`;
  imageUrl2 = 'photo4.png';

  changeBanner() {
    if(this.bannerNo == 5){
      this.bannerNo = 0
    }
    this.bannerNo = this.bannerNo + 1;
    this.imageUrl = `./backgrounds/background${this.bannerNo}.png`;
  }
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.changeBanner();
    }, 2500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  showForm = false;

  process=[
    {
      title:"Browse",
      description:"Browse our curated unlisted share opportunities"
    },
    {
      title:"Contact",
      description:"Express interest via the form or WhatsApp"
    },
    {
      title:"Confirmation",
      description:"Our team confirms availability and execution timelines"
    },
    {
      title:"Transaction",
      description:"Transaction is conducted privately via our proprietary desk or partner network"
    },
  ]
}


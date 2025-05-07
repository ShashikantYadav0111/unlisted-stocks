import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CommonModule } from '@angular/common';
import { SubSectionComponent } from "../../components/sub-section/sub-section.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { Router, RouterModule } from '@angular/router';
import { Footer3Component } from "../../components/footer3/footer3.component";

@Component({
  selector: 'app-about',
  imports: [CommonModule,  TestimonialsComponent, RouterModule, Footer3Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  image='./banner1.jpg'
  sections = [
    {
      title: '🛡️ Trust, Compliance & Transparency',
      content:
        [
          "We don’t run a public trading platform.",
          "No peer-to-peer dealing.",
          "Every transaction is routed via our proprietary desk or SEBI-registered intermediaries.",
          "Investor data and interest is handled securely and confidentially."
        ],
      image: '/about/section_2.png',
    },
    {
      title: '👥 Who We Work With',
      content:
        [
          "HNIs & Family Offices",
          "Investment Bankers",
          "Startup Founders (Exit Liquidity)",
          "Private Equity Desks",
          "Fund Managers & Syndicates"
        ],image: '/about/section_3.png',
    },
  ];

  deals = [
    {
      company: "NSE India Ltd",
      sector: "Capital Markets",
      dealType: "Buy‑side",
      status: "Executed"
    },
    {
      company: "OYO Rooms",
      sector: "Hospitality",
      dealType: "Sell‑side",
      status: "Booked"
    },
    {
      company: "MSEI (Metropolitan Exchange)",
      sector: "Financial Infra",
      dealType: "Buy‑side",
      status: "Closed"
    },
    {
      company: "Polymatech",
      sector: "Semiconductor",
      dealType: "Internal Inventory",
      status: "Sold"
    }
  ];
  
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}

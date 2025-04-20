import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trending',
  imports: [CommonModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent {
  trending_unlisted_stocks = [
    {
      logo: './logos/nse-logo.jpg',
      company_name: 'National Stock Exchange (NSE)',
      sector: 'Financial Services',
      price_per_share: 1625,
      valuation: 4700000000000,
      valuation_display: '₹4.7 trillion',
      trend: 'Positive',
      trend_details: 'Increased from ₹3400 to ₹3700 per share',
      description:
        "India's largest stock exchange with virtual monopoly on stock derivatives",
      highlights: [
        '201% valuation increase',
        '80% EBITDA operating margin',
        'Dominant market position in Indian financial markets',
      ],
    },
    {
      logo: './logos/oyo-logo.png',
      company_name: 'Oravel Stays Limited (OYO)',
      sector: 'Hospitality',
      price_per_share: 52,
      description:
        'Leading global hospitality chain with 157,000+ hotels across 35 countries',
      highlights: [
        '316% improvement in consolidated adjusted EBITDA for FY24',
        'Turned profitable with Rs 141.2 crore profit in FY24',
        'Adjusted Gross Profit margin of 23.6% in FY24',
        'Expanding operations in Europe, USA, and Middle East',
      ],
    },
    {
      logo: './logos/zerodha-logo.png',
      company_name: 'Zerodha',
      price_per_share: '--- /-',
      sector: 'Financial Services',
      valuation: 877500000000,
      valuation_display: '₹87,750 crore',
      description:
        'Discount brokerage firm revolutionizing online trading with user-friendly platform and low fees',
      highlights: [
        'Achieved a consolidated revenue of ₹9,372 crore in FY24, marking a 37% year-over-year growth.',
        'Net profit stood at ₹5,496 crore in FY24, reflecting an 89% increase from the previous fiscal year.',
        'Operating margin reached 57% in FY24, outperforming several major global tech companies.',
        "Anticipates a potential 10% revenue dip in FY25 due to SEBI's new fee circular and regulatory changes affecting index derivatives.",
      ],
    },
    {
      logo: './logos/tata-logo.webp',
      company_name: 'Tata Capital Limited',
      sector: 'Financial Services',
      price_per_share: 1050,
      description: 'Financial arm of Tata Group, an NBFC registered with RBI',
      highlights: [
        'One-stop financial partner for corporate, institutional, and retail customers',
        'Services include personal loans, business loans, home loans, private equity, and SME finance',
        'Growing price value and net worth year by year',
      ],
    },
    {
      logo: './logos/serum.jpeg',
      company_name: 'Serum Institute of India',
      price_per_share: '--- /-',
      sector: 'Healthcare and Pharmaceuticals',
      valuation: 1920000000000,
      valuation_display: '₹1.92 trillion',
      description: "World's largest vaccine manufacturer by volume",
      "highlights": [
    "Reported revenue of ₹10,190 crore in FY23, a 60% decrease from the previous year.",
    "Revenue further moderated to ₹9,549 crore in FY24, attributed to a decline in COVID-19 vaccine demand.",
    "Maintained strong profitability and healthy financial risk profile despite revenue fluctuations.",
    "Valuation increased by 10% in 2024, reaching ₹2,11,610 crore, making it India's second most valuable unlisted firm."
  ]
    },
    {
      logo: './logos/zoho-logo.png',
      company_name: 'Zoho Corporation',
      price_per_share: '--- /-',
      sector: 'Technology and Software',
      valuation: 1030000000000,
      valuation_display: '₹1.03 trillion',
      description:
        'Comprehensive suite of online business tools and software solutions',
      highlights: [
        'Achieved a consolidated revenue of ₹8,703 crore in FY23, marking a 30% year-over-year growth.',
        'Net profit stood at ₹2,836 crore in FY23, reflecting a 3% increase from the previous fiscal year.',
        'Operating expenses rose by 51% in FY23, primarily due to increased investments in employee benefits and advertising.',
        'EBITDA margin decreased to 44.55% in FY23 from 53.07% in FY22, attributed to higher operational costs.',
        'Founder Sridhar Vembu transitioned from CEO to Chief Scientist in 2024 to focus on AI and deep tech research.',
      ],
    },
    {
      logo: './logos/dream-logo.png',
      company_name: 'Dream 11',
      price_per_share: '--- /-',
      sector: 'E-commerce and Digital Platforms',
      valuation: 597000000000,
      valuation_display: '₹59,700 crore',
      description:
        'Leading fantasy sports platform in India showing growing popularity',
      highlights: [
        'Achieved unicorn status in April 2021, valued over $8 billion',
        'Profitable since FY20 — over ₹300 Cr net profit in FY23',
        'Revenue grew 50% YoY reaching ₹6,500 Cr in FY24',
        'Sponsorship partner for IPL, ICC, and multiple sports leagues',
      ],
    },
    {
      logo: './logos/vikram-logo.png',
      company_name: 'Vikram Solar',
      price_per_share: '--- /-',
      sector: 'Renewable Energy',
      description: "India's leading Solar Photovoltaic module manufacturer",
      highlights: [
        'DRHP filed on September 30th, 2024',
        'Planning to raise 1500 Cr through fresh issue and 1.74 Cr shares in Offer for Sale',
        'Profit After Tax of 79.7 Cr for FY 2024',
        '15% improvement in EBITDA Margin',
      ],
    },
  ];

  currentStockIndex = 0;
  currentStock: any = null;
  intervalId: any;

  ngOnInit() {
    this.currentStock = this.trending_unlisted_stocks[this.currentStockIndex];
    this.intervalId = setInterval(() => {
      this.nextStock();
    }, 3000); // 2 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextStock() {
    this.currentStockIndex =
      (this.currentStockIndex + 1) % this.trending_unlisted_stocks.length;
    this.currentStock = this.trending_unlisted_stocks[this.currentStockIndex];
  }
}

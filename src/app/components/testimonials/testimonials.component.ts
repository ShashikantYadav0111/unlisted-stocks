import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Vikram Joshi',
      title: 'Bank Manager, Indore',
      message: 'The clarity in their pre‑IPO fee structure gives me complete peace of mind. No last‑minute surprises, just a smooth process and fair pricing every step of the way.',
      rating: '★★★★★',
    },
    {
      name: 'Ananya Reddy',
      title: 'Day Trader, Vizag',
      message: 'Unlike other brokers who jack up prices, this team sticks to honest rates. Plus, their execution is lightning‑fast—I’ve never missed a deal due to delays.',
      rating: '★★★★☆',
    },
    {
      name: 'Harish Kumar',
      title: 'SME Investor, Nagpur',
      message: 'Finally, a broker that treats small investors fairly. Their flat‑fee model saved me nearly 30% compared to my old broker’s hidden markups.',
      rating: '★★★★★',
    },
    {
      name: 'Sunita Malhotra',
      title: 'Family Office, Jaipur',
      message: 'For high‑value unlisted deals, their competitive rates and in‑depth due diligence support have been invaluable. I trust them completely with our family’s investments.',
      rating: '★★★★★',
    },
    {
      name: 'Amit Bansal',
      title: 'VC Associates, Lucknow',
      message: 'Best partner I’ve found for pre‑IPO allocations. Their transparent pricing and negotiation support on a unicorn deal recently made a huge difference.',
      rating: '★★★★★',
    },
    {
      name: 'Priyanka Choudhary',
      title: 'Corporate Investor, Chandigarh',
      message: 'I switched here after realizing how much I was overpaying. Now, the fees are fair, and the team actually takes the time to explain their pricing—no more guesswork.',
      rating: '★★★★☆',
    },
  ]; 
}

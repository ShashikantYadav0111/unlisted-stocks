import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why',
  imports: [CommonModule],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss'
})
export class WhyComponent {
  questions = [
    {
        question: 'What are unlisted stocks?',
        answer: 'Unlisted stocks are shares of companies that are not traded on formal stock exchanges like NSE or BSE. These stocks are bought and sold through over-the-counter (OTC) markets, private placements, or directly from investors.'
    },
    {
        question: 'Why should I buy unlisted stocks?',
        answer: 'Unlisted stocks can offer early investment opportunities in high-growth companies before they go public. They may provide high returns if the company performs well or eventually lists on a major stock exchange.'
    },
    {
        question: 'How can I buy unlisted stocks?',
        answer: 'You can buy unlisted stocks through authorized brokers, wealth management firms, private deals, or online platforms specializing in unlisted shares. Always verify the credibility of the seller before investing.'
    },
    {
        question: 'Are unlisted stocks Legal?',
        answer: 'Yes, buying and selling unlisted stocks is completely legal in India, provided the transactions comply with SEBI regulations and all required taxes are properly paid.'
    }
];

}

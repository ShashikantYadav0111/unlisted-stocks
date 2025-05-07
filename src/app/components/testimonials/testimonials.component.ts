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
      name: 'Priyanka Choudhary',
      title: 'Corporate Investor, Chandigarh',
      message: 'This platform is one of the most informative platforms. Their customer representatives are knowledgeable and well spoken.',
      rating: '★★★★☆',
    },
    {
      name: 'Rohit Mehra',
      title: 'Startup Founder, Bengaluru',
      message: 'Amazing experience! The team was prompt, professional, and very responsive to our queries.',
      rating: '★★★★★',
    },
    {
      name: 'Sneha Agarwal',
      title: 'Marketing Manager, Mumbai',
      message: 'A very resourceful service — they helped us make informed decisions and guided us throughout.',
      rating: '★★★★☆',
    },
    {
      name: 'Aditya Narayan',
      title: 'Retail Trader, New Delhi',
      message: 'Great support team! Very professional and always ready to assist with detailed insights.',
      rating: '★★★★☆',
    },
    {
      name: 'Meera Kapoor',
      title: 'Financial Analyst, Hyderabad',
      message: 'A highly recommended platform for anyone looking for reliable and timely information.',
      rating: '★★★★★',
    },
    {
      name: 'Karan Singh',
      title: 'Equity Advisor, Pune',
      message: 'Excellent service and very user-friendly interface. Their insights are always on point.',
      rating: '★★★★★',
    }
  ];
  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: "Rahul Mehta",
      title: "Investor, Mumbai",
      message: "This app makes trading so simple and intuitive. I’ve seen real improvement in my strategies."
    },
    {
      name: "Priya Sharma",
      title: "Trader, Bangalore",
      message: "I love the real-time data and clean UI. Perfect for both beginners and experienced traders."
    },
    {
      name: "Arjun Verma",
      title: "Equity Analyst, Delhi",
      message: "Best stock market app I've used. The insights and alerts are incredibly helpful!"
    },
    {
      name: "Sneha Iyer",
      title: "Beginner Trader, Chennai",
      message: "I was new to investing, but this app gave me the confidence to start. The tutorials are super helpful!"
    },
    {
      name: "Rohit Deshmukh",
      title: "Swing Trader, Pune",
      message: "Love the technical analysis tools and how customizable the watchlist is. Well done team!"
    },
    {
      name: "Anjali Kapoor",
      title: "Finance Blogger, Hyderabad",
      message: "I've reviewed many platforms, and this one is by far the most intuitive and well-designed for Indian markets."
    },
    {
      name: "Nikhil Arora",
      title: "Options Trader, Noida",
      message: "The real-time alerts have saved me from losses multiple times. This is a must-have app for active traders."
    },
    {
      name: "Kavita Sinha",
      title: "Portfolio Manager, Kolkata",
      message: "Managing multiple stocks is effortless now. Great insights, smart UI, and fast performance."
    }
  ];
  
}

import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CommonModule } from '@angular/common';
import { SubSectionComponent } from "../../components/sub-section/sub-section.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";

@Component({
  selector: 'app-about',
  imports: [SectionComponent, CommonModule, SubSectionComponent, TestimonialsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  sections = [
    {
      title: '🚀 Who We Are',
      content:
        'We are a team of  stock market professionals, and tech innovators passionate about building a transparent, secure, and accessible marketplace for unlisted equity. Our goal is to bridge the gap between retail investors and private market opportunities.',
      image: '/about/section_2.png',
    },
    {
      title: '💡 What We Do',
      content:
        'We make it easy for you to buy and sell shares of unlisted companies like Tata Technologies, PharmEasy, Reliance Retail, OYO, and more – all through a seamless digital experience.. We strive to provide a seamless trading experience, backed by expert insights and a commitment to transparency.',
      image: '/about/section_3.png',
    },
    {
      title: '🌱 Why Unlisted Stocks?',
      content:
        "Unlisted shares can offer early access to potential unicorns, strong returns, and portfolio diversification. Whether you're looking to get in before an IPO or exit a private investment, we’ve got you covered.",
      image: '/about/section_4.jpeg',
    }
  ];
}

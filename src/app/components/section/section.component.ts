import { Component, Input } from '@angular/core';

interface Section{
  title: string;
  content: string;
  image: string;
}
@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  sectionData = {
    title: 'Empowering Investors in the Unlisted Space',
    content:
      'your trusted platform for trading unlisted shares and pre-IPO stocks of India’s most promising private companies. We’re on a mission to democratize access to opportunities that were once reserved for a select few.',
    image: '/about/section_1.png',
    }
}

import { Component, Input } from '@angular/core';

interface Section{
  title: string;
  content: string;
  image: string;
}
@Component({
  selector: 'app-sub-section',
  imports: [],
  templateUrl: './sub-section.component.html',
  styleUrl: './sub-section.component.scss'
})
export class SubSectionComponent {
  @Input() sectionData!: Section;
}

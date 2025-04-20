import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactInfo = { 
    phoneNo:'9987632123',
    email:'abc@gmail.com',
    address:'123, 4th Main, 5th Cross, Bangalore, Karnataka, India'
  }

}

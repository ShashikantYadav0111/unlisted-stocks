import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer3',
  imports: [RouterModule],
  templateUrl: './footer3.component.html',
  styleUrl: './footer3.component.scss'
})
export class Footer3Component {
  contactInfo2 = { 
    phoneNo:'+91 120 311 6517',
    email:'unlistedequities@gmail.com',
    address:''
  }
}

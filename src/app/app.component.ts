import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component"
import { Footer3Component } from "./components/footer3/footer3.component";
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer3Component,DisclaimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}

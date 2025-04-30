import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component"
import { Footer3Component } from "./components/footer3/footer3.component";
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { Home2Component } from './components/home2/home2.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer3Component,DisclaimerComponent,Home2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}

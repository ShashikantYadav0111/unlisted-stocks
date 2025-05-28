import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component"
import { Footer3Component } from "./components/footer3/footer3.component";
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { LoaderService } from './shared/loader.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './shared/loader/loader.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,CommonModule,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loading = false;

  constructor(private router: Router, private loaderService: LoaderService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loaderService.hide();
      }
    });

    this.loaderService.loading$.subscribe(status => {
      this.loading = status;
    });
  }
}

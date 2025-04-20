import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'screener',
    loadComponent: () =>
      import('./components/stock-list/stock-list.component').then((m) => m.StockListComponent),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./components/news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'disclaimer',
    loadComponent: () =>
      import('./pages/disc/disc.component').then((m) => m.DiscComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./pages/tnc/tnc.component').then((m) => m.TncComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
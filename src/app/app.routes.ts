import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PagNotFoundComponent } from './shared/components/pag-not-found/pag-not-found.component';
import { BreedComponent } from './pages/breed/breed.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', component: BreedComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: PagNotFoundComponent },
];

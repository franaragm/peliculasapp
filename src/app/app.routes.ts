import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {MovieComponent} from './components/movie/movie.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: 'movie/:id/:page', component: MovieComponent },
  { path: 'movie/:id/:page/:term', component: MovieComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

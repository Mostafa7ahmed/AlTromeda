import { Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';
import { isAuthGuard } from './Core/guards/is-auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./Pages/about/about').then((m) => m.About),
  },
  {
    path: 'services',
    loadComponent: () => import('./Pages/services/services').then((m) => m.Services),
  },
  {
    path: 'projects',
    loadComponent: () => import('./Pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'teams',
    loadComponent: () => import('./Pages/teams/teams').then((m) => m.Teams),
  },
  {
    path: 'contact',
    loadComponent: () => import('./Pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'login',
    loadComponent: () => import('./Pages/Auth/login/login').then((m) => m.Login),
    canActivate: [isAuthGuard],
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

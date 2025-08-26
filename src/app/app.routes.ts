import { Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';
import { isAuthGuard } from './Core/guards/is-auth.guard';
import { Home } from './Pages/home/home';
import { Loading } from './components/loading/loading';

export const routes: Routes = [
  {
    path: '',
  pathMatch: 'full',
    redirectTo: 'home',
  },
  {

title: 'Al Tromeda | Loading' ,
  },
  {
    path: 'home',
    component: Home,
    title: 'Al Tromeda | Home' ,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Pages/about/about').then((m) => m.About),
  title: 'Al Tromeda | About' ,
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./Pages/services/services').then((m) => m.Services),
     title: 'Al Tromeda | Services' ,
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./Pages/projects/projects').then((m) => m.Projects),
     title: 'Al Tromeda | Projects' ,
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./Pages/teams/teams').then((m) => m.Teams),
    title: 'Al Tromeda | Teams' },

  {
    path: 'contact',
    loadComponent: () =>
      import('./Pages/contact/contact').then((m) => m.Contact),
    title: 'Al Tromeda | Contact'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Pages/Auth/login/login').then((m) => m.Login),
    canActivate: [isAuthGuard],
    title: 'Al Tromeda | Login'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

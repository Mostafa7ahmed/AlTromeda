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
    path: 'home',
    component: Home,
    title: 'Altromeda | Home' ,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Pages/about/about').then((m) => m.About),
  title: 'Altromeda | About' ,
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./Pages/services/services').then((m) => m.Services),
     title: 'Altromeda | Services' ,
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./Pages/projects/projects').then((m) => m.Projects),
     title: 'Altromeda | Projects' ,
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./Pages/teams/teams').then((m) => m.Teams),
    title: 'Altromeda | Teams' },

  {
    path: 'contact',
    loadComponent: () =>
      import('./Pages/contact/contact').then((m) => m.Contact),
    title: 'Altromeda | Contact'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Pages/Auth/login/login').then((m) => m.Login),
    canActivate: [isAuthGuard],
    title: 'Altromeda | Login'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

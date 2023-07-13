import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'search',
    loadChildren: () => import('@movie-tracker/movie-search').then(s => s.MovieSearchModule)
  },
  {
    path:'admin',
    loadChildren: () => import('@movie-tracker/movie-admin').then(a => a.MovieAdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  }
];

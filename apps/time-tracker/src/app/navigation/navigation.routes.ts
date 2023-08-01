import { Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

export const navigationRoutes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'viewStatus',
        loadChildren: () => import('@time-tracker/view-status').then(vs => vs.ViewStatusModule)
      }
    ]
  }
];

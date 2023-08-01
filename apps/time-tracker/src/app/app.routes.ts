import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './+state/auth/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule),
    canActivate: [AuthGuard]
  }
];

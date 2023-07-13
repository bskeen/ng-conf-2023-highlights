import { Route } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchGridComponent } from './search-grid/search-grid.component';

export const searchRoutes: Route[] = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: '',
        component: SearchGridComponent
      }
    ]
  }
];

import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { searchGridActions } from '../search-grid/search-grid.actions';

@Injectable()
export class SearchEffects {
  private actions$ = inject(Actions);

  searchSubmitted$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchGridActions.searchSubmitted),
      // switchMap(({ searchText }) => {

      // })
    )
  })
}

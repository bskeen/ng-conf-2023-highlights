import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ViewStatusActions from './view-status.actions';
import * as ViewStatusFeature from './view-status.reducer';

@Injectable()
export class ViewStatusEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewStatusActions.initViewStatus),
      switchMap(() =>
        of(ViewStatusActions.loadViewStatusSuccess({ viewStatus: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ViewStatusActions.loadViewStatusFailure({ error }));
      })
    )
  );
}

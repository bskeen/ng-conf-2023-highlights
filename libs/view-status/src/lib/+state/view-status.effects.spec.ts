import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ViewStatusActions from './view-status.actions';
import { ViewStatusEffects } from './view-status.effects';

describe('ViewStatusEffects', () => {
  let actions: Observable<Action>;
  let effects: ViewStatusEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ViewStatusEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ViewStatusEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ViewStatusActions.initViewStatus() });

      const expected = hot('-a-|', {
        a: ViewStatusActions.loadViewStatusSuccess({ viewStatus: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

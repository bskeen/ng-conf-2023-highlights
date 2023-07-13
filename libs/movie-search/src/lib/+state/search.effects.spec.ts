import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { searchActions } from './search.actions';
import { SearchEffects } from './search.effects';

describe('SearchEffects', () => {
  let actions: Observable<Action>;
  let effects: SearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SearchEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SearchEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: searchActions.initSearch() });

      const expected = hot('-a-|', {
        a: searchActions.loadSearchSuccess({ search: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

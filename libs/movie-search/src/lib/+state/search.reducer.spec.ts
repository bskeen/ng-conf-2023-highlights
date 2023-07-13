import { Action } from '@ngrx/store';

import * as SearchActions from './search.actions';
import { SearchEntity } from './search.models';
import {
  SearchState,
  initialSearchState,
  searchReducer,
} from './search.reducer';

describe('Search Reducer', () => {
  const createSearchEntity = (id: string, name = ''): SearchEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Search actions', () => {
    it('loadSearchSuccess should return the list of known Search', () => {
      const search = [
        createSearchEntity('PRODUCT-AAA'),
        createSearchEntity('PRODUCT-zzz'),
      ];
      const action = SearchActions.loadSearchSuccess({ search });

      const result: SearchState = searchReducer(initialSearchState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = searchReducer(initialSearchState, action);

      expect(result).toBe(initialSearchState);
    });
  });
});

import { SearchEntity } from './search.models';
import {
  searchAdapter,
  SearchPartialState,
  initialSearchState,
} from './search.reducer';
import * as SearchSelectors from './search.selectors';

describe('Search Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSearchId = (it: SearchEntity) => it.id;
  const createSearchEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SearchEntity);

  let state: SearchPartialState;

  beforeEach(() => {
    state = {
      search: searchAdapter.setAll(
        [
          createSearchEntity('PRODUCT-AAA'),
          createSearchEntity('PRODUCT-BBB'),
          createSearchEntity('PRODUCT-CCC'),
        ],
        {
          ...initialSearchState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Search Selectors', () => {
    it('selectAllSearch() should return the list of Search', () => {
      const results = SearchSelectors.selectAllSearch(state);
      const selId = getSearchId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = SearchSelectors.selectEntity(state) as SearchEntity;
      const selId = getSearchId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectSearchLoaded() should return the current "loaded" status', () => {
      const result = SearchSelectors.selectSearchLoaded(state);

      expect(result).toBe(true);
    });

    it('selectSearchError() should return the current "error" state', () => {
      const result = SearchSelectors.selectSearchError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

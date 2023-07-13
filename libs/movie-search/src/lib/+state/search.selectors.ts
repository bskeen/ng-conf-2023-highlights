import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SEARCH_FEATURE_KEY,
  SearchState,
  searchAdapter,
} from './search.reducer';

// Lookup the 'Search' feature state managed by NgRx
export const selectSearchState =
  createFeatureSelector<SearchState>(SEARCH_FEATURE_KEY);

const { selectAll, selectEntities } = searchAdapter.getSelectors();

export const selectSearchLoaded = createSelector(
  selectSearchState,
  (state: SearchState) => state.loaded
);

export const selectSearchError = createSelector(
  selectSearchState,
  (state: SearchState) => state.error
);

export const selectAllSearch = createSelector(
  selectSearchState,
  (state: SearchState) => selectAll(state)
);

export const selectSearchEntities = createSelector(
  selectSearchState,
  (state: SearchState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectSearchState,
  (state: SearchState) => state.selectedId
);

export const selectEntity = createSelector(
  selectSearchEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

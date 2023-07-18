import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SEARCH_FEATURE_KEY,
  SearchState,
} from './search.reducer';

// Lookup the 'Search' feature state managed by NgRx
const selectState =
  createFeatureSelector<SearchState>(SEARCH_FEATURE_KEY);

const selectLoadedState = createSelector(
  selectState,
  (state: SearchState) => state.loadedState
);

const selectError = createSelector(
  selectState,
  (state: SearchState) => state.error
);

const selectSearchResults = createSelector(
  selectState,
  (state: SearchState) => state.movies
);

export const searchSelectors = {
  selectState,
  selectLoadedState,
  selectError,
  selectSearchResults
};

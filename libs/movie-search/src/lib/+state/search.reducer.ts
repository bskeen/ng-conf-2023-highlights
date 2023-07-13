import { createReducer, on } from '@ngrx/store';

import { Movie } from './search.models';

import { searchGridActions } from '../search-grid/search-grid.actions';
import { searchEffectsActions } from './search-effects.actions';

export const SEARCH_FEATURE_KEY = 'search';

export interface SearchState {
  movies: Movie[];
  loadedState: 'initial' | 'loading' | 'loaded' | 'error';
  error?: unknown;
}

export const initialSearchState: SearchState = {
  movies: [],
  loadedState: 'initial',
};

export const searchReducer = createReducer(
  initialSearchState,
  on(searchGridActions.searchSubmitted, (state) =>  {
    return {
      ...state,
      loadedState: 'loading',
      error: null,
    } as SearchState;
  }),
  on(searchEffectsActions.loadSearchSuccess, (state, { results }) => {
    return {
      ...state,
      movies: results,
      loadedState: 'loaded'
    } as SearchState;
  }
  ),
  on(searchEffectsActions.loadSearchFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

const getState = createFeatureSelector<AuthState>('auth');

const getCurrentRole = createSelector(getState, state => state.role);

export const authSelectors = {
  getState,
  getCurrentRole
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  VIEW_STATUS_FEATURE_KEY,
  ViewStatusState,
  viewStatusAdapter,
} from './view-status.reducer';

// Lookup the 'ViewStatus' feature state managed by NgRx
export const selectViewStatusState = createFeatureSelector<ViewStatusState>(
  VIEW_STATUS_FEATURE_KEY
);

const { selectAll, selectEntities } = viewStatusAdapter.getSelectors();

export const selectViewStatusLoaded = createSelector(
  selectViewStatusState,
  (state: ViewStatusState) => state.loaded
);

export const selectViewStatusError = createSelector(
  selectViewStatusState,
  (state: ViewStatusState) => state.error
);

export const selectAllViewStatus = createSelector(
  selectViewStatusState,
  (state: ViewStatusState) => selectAll(state)
);

export const selectViewStatusEntities = createSelector(
  selectViewStatusState,
  (state: ViewStatusState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectViewStatusState,
  (state: ViewStatusState) => state.selectedId
);

export const selectEntity = createSelector(
  selectViewStatusEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ViewStatusActions from './view-status.actions';
import { ViewStatusEntity } from './view-status.models';

export const VIEW_STATUS_FEATURE_KEY = 'viewStatus';

export interface ViewStatusState extends EntityState<ViewStatusEntity> {
  selectedId?: string | number; // which ViewStatus record has been selected
  loaded: boolean; // has the ViewStatus list been loaded
  error?: string | null; // last known error (if any)
}

export interface ViewStatusPartialState {
  readonly [VIEW_STATUS_FEATURE_KEY]: ViewStatusState;
}

export const viewStatusAdapter: EntityAdapter<ViewStatusEntity> =
  createEntityAdapter<ViewStatusEntity>();

export const initialViewStatusState: ViewStatusState =
  viewStatusAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialViewStatusState,
  on(ViewStatusActions.initViewStatus, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ViewStatusActions.loadViewStatusSuccess, (state, { viewStatus }) =>
    viewStatusAdapter.setAll(viewStatus, { ...state, loaded: true })
  ),
  on(ViewStatusActions.loadViewStatusFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function viewStatusReducer(
  state: ViewStatusState | undefined,
  action: Action
) {
  return reducer(state, action);
}

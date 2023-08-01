import { createAction, props } from '@ngrx/store';
import { ViewStatusEntity } from './view-status.models';

export const initViewStatus = createAction('[ViewStatus Page] Init');

export const loadViewStatusSuccess = createAction(
  '[ViewStatus/API] Load ViewStatus Success',
  props<{ viewStatus: ViewStatusEntity[] }>()
);

export const loadViewStatusFailure = createAction(
  '[ViewStatus/API] Load ViewStatus Failure',
  props<{ error: any }>()
);

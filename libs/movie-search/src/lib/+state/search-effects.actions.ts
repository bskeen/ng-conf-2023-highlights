import { createAction, props } from "@ngrx/store";
import { Movie } from "./search.models";

const loadSearchSuccess = createAction(
  '[Search/API] Load Search Success',
  props<{ results: Movie[] }>()
);

const loadSearchFailure = createAction(
  '[Search/API] Load Search Failure',
  props<{ error: unknown }>()
);

export const searchEffectsActions = {
  loadSearchSuccess,
  loadSearchFailure,
};

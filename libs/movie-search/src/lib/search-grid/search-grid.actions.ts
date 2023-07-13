import { createAction, props } from "@ngrx/store";

const searchSubmitted = createAction(
  '[Search Grid] Search Submitted',
  props<{ searchText: string }>()
);

export const searchGridActions = {
  searchSubmitted
};

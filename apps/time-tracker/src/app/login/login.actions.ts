import { createAction, props } from '@ngrx/store';

const login = createAction(
  '[Login Component] Log In',
  props<{ role: 'admin' | 'user' }>()
);

export const loginActions = {
  login
};

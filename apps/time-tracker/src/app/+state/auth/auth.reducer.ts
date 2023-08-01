import { createReducer, on } from '@ngrx/store';
import { loginActions } from '../../login/login.actions';

export interface AuthState {
  role: 'admin' | 'user' | ''
}

const initialState: AuthState = {
  role: ''
}

export const authReducer = createReducer(
  initialState,
  on(loginActions.login, (state, action) => {
    return {
      ...state,
      role: action.role
    };
  })
);

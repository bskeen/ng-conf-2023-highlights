import { Action } from '@ngrx/store';

import * as ViewStatusActions from './view-status.actions';
import { ViewStatusEntity } from './view-status.models';
import {
  ViewStatusState,
  initialViewStatusState,
  viewStatusReducer,
} from './view-status.reducer';

describe('ViewStatus Reducer', () => {
  const createViewStatusEntity = (id: string, name = ''): ViewStatusEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ViewStatus actions', () => {
    it('loadViewStatusSuccess should return the list of known ViewStatus', () => {
      const viewStatus = [
        createViewStatusEntity('PRODUCT-AAA'),
        createViewStatusEntity('PRODUCT-zzz'),
      ];
      const action = ViewStatusActions.loadViewStatusSuccess({ viewStatus });

      const result: ViewStatusState = viewStatusReducer(
        initialViewStatusState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = viewStatusReducer(initialViewStatusState, action);

      expect(result).toBe(initialViewStatusState);
    });
  });
});

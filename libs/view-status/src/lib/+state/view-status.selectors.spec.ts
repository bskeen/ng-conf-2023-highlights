import { ViewStatusEntity } from './view-status.models';
import {
  viewStatusAdapter,
  ViewStatusPartialState,
  initialViewStatusState,
} from './view-status.reducer';
import * as ViewStatusSelectors from './view-status.selectors';

describe('ViewStatus Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getViewStatusId = (it: ViewStatusEntity) => it.id;
  const createViewStatusEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ViewStatusEntity);

  let state: ViewStatusPartialState;

  beforeEach(() => {
    state = {
      viewStatus: viewStatusAdapter.setAll(
        [
          createViewStatusEntity('PRODUCT-AAA'),
          createViewStatusEntity('PRODUCT-BBB'),
          createViewStatusEntity('PRODUCT-CCC'),
        ],
        {
          ...initialViewStatusState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ViewStatus Selectors', () => {
    it('selectAllViewStatus() should return the list of ViewStatus', () => {
      const results = ViewStatusSelectors.selectAllViewStatus(state);
      const selId = getViewStatusId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ViewStatusSelectors.selectEntity(
        state
      ) as ViewStatusEntity;
      const selId = getViewStatusId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectViewStatusLoaded() should return the current "loaded" status', () => {
      const result = ViewStatusSelectors.selectViewStatusLoaded(state);

      expect(result).toBe(true);
    });

    it('selectViewStatusError() should return the current "error" state', () => {
      const result = ViewStatusSelectors.selectViewStatusError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

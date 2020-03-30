import { IReducerAction } from '..';
import { INITIAL_STATE } from '.';
import { OngActionsTypes } from './types';
import produce from 'immer';

export default function reducerOngs(
  state = INITIAL_STATE,
  action: IReducerAction<string>
) {
  switch (action.type) {
    case OngActionsTypes.STORE:
      return produce(state, (draft) => {
        draft.storeIsLoading = true;
      });
    case OngActionsTypes.STORE_SUCCESS:
      return produce(state, (draft) => {
        draft.storeIsLoading = false;
      });
    case OngActionsTypes.STORE_ERROR:
      return produce(state, (draft) => {
        draft.storeIsLoading = false;
      });

    default:
      return state;
  }
}

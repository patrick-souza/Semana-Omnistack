import { IReducerAction } from '..';
import { INITIAL_STATE } from '.';
import { AuthActionsTypes } from './types';
import produce from 'immer';

export default function reducerAuth(
  state = INITIAL_STATE,
  action: IReducerAction<string>
) {
  switch (action.type) {
    case AuthActionsTypes.STORE:
      return produce(state, (draft) => {
        draft.isLoading = true;
        draft.ongId = action.payload;
      });
    case AuthActionsTypes.STORE_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.ongName = action.payload;
      });
    case AuthActionsTypes.STORE_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });
    case AuthActionsTypes.SIGNOUT:
      return produce(state, (draft) => {
        draft = { ...INITIAL_STATE };
      });
    default:
      return state;
  }
}

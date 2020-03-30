import { IReducerAction } from '..';
import { INITIAL_STATE } from '.';
import { IncidentActionsTypes, Incident } from './types';
import produce from 'immer';

export default function reducerIncidents(
  state = INITIAL_STATE,
  action: IReducerAction<Incident[] | Incident | number>
) {
  switch (action.type) {
    case IncidentActionsTypes.STORE:
      return produce(state, (draft) => {
        draft.storeIsLoading = true;
      });
    case IncidentActionsTypes.STORE_SUCCESS:
      return produce(state, (draft) => {
        draft.storeIsLoading = false;
        const newIncident = action.payload as Incident;

        draft.incidents = [...draft.incidents, newIncident];
      });
    case IncidentActionsTypes.STORE_ERROR:
      return produce(state, (draft) => {
        draft.storeIsLoading = false;
      });
    case IncidentActionsTypes.INDEX:
      return produce(state, (draft) => {
        draft.indexIsLoading = true;
      });
    case IncidentActionsTypes.INDEX_SUCCESS:
      return produce(state, (draft) => {
        draft.indexIsLoading = false;
        const incidents = action.payload as Incident[];

        draft.incidents = incidents;
      });
    case IncidentActionsTypes.INDEX_ERROR:
      return produce(state, (draft) => {
        draft.indexIsLoading = false;
      });

    case IncidentActionsTypes.DELETE:
      return produce(state, (draft) => {
        draft.storeIsLoading = true;
      });
    case IncidentActionsTypes.DELETE_SUCCESS:
      return produce(state, (draft) => {
        draft.storeIsLoading = false;
        const idToDelete = action.payload as number;
        const indexToDelete = draft.incidents.findIndex(
          ({ id }) => id === idToDelete
        );
        draft.incidents.splice(indexToDelete, 1);
      });
    case IncidentActionsTypes.DELETE_ERROR:
      return produce(state, (draft) => {
        draft.storeIsLoading = false;
      });
    default:
      return state;
  }
}

import { all, takeLatest, call, put } from 'redux-saga/effects';
import History from 'Util/History';
import { createNewIncident, listIncidents, deleteIncident } from './services';
import { IReducerAction } from '..';
import { Incident, IncidentActionsTypes } from './types';
import {
  StoreIncidentSuccess,
  StoreIncidentError,
  IndexIncidentsSuccess,
  IndexIncidentsError,
  DeleteIncidentSuccess,
  DeleteIncidentError,
} from './actions';
import formatCurrency from 'Util/Format';

function* sagaCreateIncident(action: IReducerAction<Partial<Incident>>) {
  try {
    const newIncident = action.payload;
    const data = (yield call(createNewIncident, newIncident)) as Incident;

    data.formatted_value = formatCurrency(data.value);

    yield put(StoreIncidentSuccess(data));

    History.push('/profile');
  } catch (error) {
    console.log(error);
    yield put(StoreIncidentError());
  }
}
function* sagaListIncidents() {
  try {
    const data = (yield call(listIncidents)) as Incident[];

    const incidents = data.map((incident) => ({
      ...incident,
      formatted_value: formatCurrency(incident.value),
    }));

    yield put(IndexIncidentsSuccess(incidents));
  } catch (error) {
    console.log(error);
    yield put(IndexIncidentsError());
  }
}
function* sagaDeleteIncident(action: IReducerAction<number>) {
  try {
    const idToDelete = action.payload;
    yield call(deleteIncident, idToDelete);

    yield put(DeleteIncidentSuccess(idToDelete));

    History.push('/profile');
  } catch (error) {
    console.log(error);
    yield put(DeleteIncidentError());
  }
}

export default function* sagaAuth() {
  yield all([
    takeLatest(IncidentActionsTypes.INDEX, sagaListIncidents),
    takeLatest(IncidentActionsTypes.STORE, sagaCreateIncident),
    takeLatest(IncidentActionsTypes.DELETE, sagaDeleteIncident),
  ]);
}

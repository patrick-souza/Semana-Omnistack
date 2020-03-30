import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { IAuthState, reducerAuth } from './Auth';
import sagaAuth from './Auth/sagas';
import { IIncidentsState, reducerIncidents, sagasIncidents } from './Incidents';
import { IOngState, reducerOngs, sagasOngs } from './Ong';

export type IApplicationState = {
  auth: IAuthState;
  incidents: IIncidentsState;
  ongs: IOngState;
};

export type IReducerAction<T = any> = { type: string; payload: T };

const reducers = combineReducers({
  auth: reducerAuth,
  incidents: reducerIncidents,
  ongs: reducerOngs,
});

function* rootSaga() {
  yield all([fork(sagaAuth), fork(sagasIncidents), fork(sagasOngs)]);
}

export default { reducers, rootSaga };

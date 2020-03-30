import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AuthActionsTypes } from './types';
import { createSession } from './services';
import { IReducerAction } from '..';
import {
  StoreSessionSuccess,
  StoreSessionError,
  StoreSession,
} from './actions';
import History from 'Util/History';
import api from 'Services/api';
import { IndexIncidents } from '../Incidents';

function* sagaCreateSession(action: IReducerAction<string>) {
  try {
    const ongId = action.payload;
    const data = (yield call(createSession, ongId)) as { name: string };

    yield put(StoreSessionSuccess(data.name));

    api.defaults.headers['Authorization'] = ongId;
    sessionStorage.setItem('@ongId', ongId);

    yield put(IndexIncidents());

    History.push('/profile');
  } catch (error) {
    console.log(error);
    yield put(StoreSessionError());
  }
}
function* sagaReloadState() {
  try {
    const ongId = sessionStorage.getItem('@ongId');

    if (!ongId) {
      return History.push('/');
    }

    yield put(StoreSession(ongId));
  } catch (error) {
    console.log(error);
    History.push('/');
  }
}
function sagaSignout() {
  sessionStorage.clear();
  History.push('/');
}

export default function* sagaAuth() {
  yield all([
    takeLatest(AuthActionsTypes.STORE, sagaCreateSession),
    takeLatest(AuthActionsTypes.RELOAD, sagaReloadState),
    takeLatest(AuthActionsTypes.SIGNOUT, sagaSignout),
  ]);
}

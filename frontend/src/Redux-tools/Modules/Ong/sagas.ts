import { all, takeLatest, call, put } from 'redux-saga/effects';
import { IReducerAction } from '..';
import { Ong, OngActionsTypes } from './types';
import { createOng } from './services';
import { StoreOngSuccess, StoreOngError } from './actions';
import { StoreSession } from '../Auth';

function* sagaCreateOng(action: IReducerAction<Ong>) {
  try {
    const newOng = action.payload;
    const data = (yield call(createOng, newOng)) as { id: string };

    yield put(StoreOngSuccess());
    yield put(StoreSession(data.id));
  } catch (error) {
    console.log(error);
    yield put(StoreOngError());
  }
}

export default function* sagaAuth() {
  yield all([takeLatest(OngActionsTypes.STORE, sagaCreateOng)]);
}

import { Store, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootModules, { IApplicationState } from './Modules';

const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(
  rootModules.reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootModules.rootSaga);

export default store;

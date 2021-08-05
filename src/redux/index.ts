import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducers from './rootReducers';
import rootSaga from './rootSaga';
import { ListState } from './list/types';
export interface ApplicationState {
  list: ListState
}

const sagaMid = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducers, applyMiddleware(sagaMid));
sagaMid.run(rootSaga);
export default store;
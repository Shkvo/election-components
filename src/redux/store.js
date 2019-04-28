import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducer from './reducers';
import initialState from './initialState';

const saga = createSagaMiddleware();
const middlewares = applyMiddleware(saga);

let store = createStore(reducer, initialState, composeWithDevTools(middlewares));

export default store;

saga.run(sagas);
import { all } from 'redux-saga/effects';
import votesSaga from './votes';
import regionsSaga from './regions';
import usersSaga from './users';

export default function* rootSaga() {
  yield all([
    votesSaga(),
    regionsSaga(),
    usersSaga()
  ]);
}
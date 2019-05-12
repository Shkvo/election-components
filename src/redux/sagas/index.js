import { all } from 'redux-saga/effects';
import votesSaga from './votes';
import regionsSaga from './regions';
import candidatesSaga from './candidates';
import usersSaga from './users';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    userSaga(),
    usersSaga(),
    votesSaga(),
    regionsSaga(),
    candidatesSaga()
  ]);
}
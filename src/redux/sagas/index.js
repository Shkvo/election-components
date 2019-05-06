import { all } from 'redux-saga/effects';
import votesSaga from './votes';
import regionsSaga from './regions';
import candidatesSaga from './candidates';
import usersSaga from './users';

export default function* rootSaga() {
  yield all([
    usersSaga(),
    votesSaga(),
    regionsSaga(),
    candidatesSaga()
  ]);
}
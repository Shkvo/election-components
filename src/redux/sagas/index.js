import { all } from 'redux-saga/effects';
import votesSaga from './votes';

export default function* rootSaga() {
  yield all([
    votesSaga()
  ]);
}
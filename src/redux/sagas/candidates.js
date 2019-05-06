import { all, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_CANDIDATES,
  FETCH_CANDIDATES_SUCCESS,
  FETCH_CANDIDATES_FAILED
} from '../types';

export function* fetchCandidates() {
  try {
    const { data } = yield api.fetchCandidates();

    yield put({
      type: FETCH_CANDIDATES_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: FETCH_CANDIDATES_FAILED,
      message: error.message
    });
  }
}

export default function* candidatesSaga() {
  yield all([
    takeEvery(FETCH_CANDIDATES, fetchCandidates)
  ]);
}

import { all, put, takeEvery, call} from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_CANDIDATES,
  FETCH_CANDIDATES_SUCCESS,
  FETCH_CANDIDATES_FAILED,
  DELETE_CANDIDATE,
  DELETE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_FAILED
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
    throw error;
  }
}

export function* deleteCandidate(action) {
  try {
    yield call(api.deleteCandidate, action.data.id);
    yield put({
      type: DELETE_CANDIDATE_SUCCESS,
      data: {
        id: action.data.id
      }
    });
  } catch (error) {
    yield put({
      type: DELETE_CANDIDATE_FAILED,
      message: error.message
    });
    throw error;
  }
}

export default function* candidatesSaga() {
  yield all([
    takeEvery(FETCH_CANDIDATES, fetchCandidates),
    takeEvery(DELETE_CANDIDATE, deleteCandidate)
  ]);
}

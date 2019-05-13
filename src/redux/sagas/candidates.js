import { all, put, takeEvery, call} from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_CANDIDATES,
  FETCH_CANDIDATES_SUCCESS,
  FETCH_CANDIDATES_FAILED,
  DELETE_CANDIDATE,
  DELETE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_FAILED,
  CREATE_CANDIDATE,
  CREATE_CANDIDATE_SUCCESS,
  CREATE_CANDIDATE_FAILED,
  UPDATE_CANDIDATE,
  UPDATE_CANDIDATE_SUCCESS,
  UPDATE_CANDIDATE_FAILED,
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
  }
}

export function* createCandidate(action) {
  try {
    const { data } = yield api.createCandidate(action.data.candidate);

    yield put({
      type: CREATE_CANDIDATE_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: CREATE_CANDIDATE_FAILED,
      message: error.message
    });
  }
}

export function* updateCandidate(action) {
  try {
    const { data } = yield api.updateCandidate(action.data.candidate);

    yield put({
      type: UPDATE_CANDIDATE_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: UPDATE_CANDIDATE_FAILED,
      message: error.message
    });
  }
}

export default function* candidatesSaga() {
  yield all([
    takeEvery(FETCH_CANDIDATES, fetchCandidates),
    takeEvery(DELETE_CANDIDATE, deleteCandidate),
    takeEvery(CREATE_CANDIDATE, createCandidate),
    takeEvery(UPDATE_CANDIDATE, updateCandidate)
  ]);
}

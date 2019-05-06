import { all, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_VOTES,
  FETCH_VOTES_SUCCESS,
  FETCH_VOTES_FAILED,
  FETCH_VOTES_BY_REGION,
  FETCH_VOTES_BY_REGION_SUCCESS,
  FETCH_VOTES_BY_REGION_FAILED
} from '../types';

export function* fetchVotes() {
  try {
    const votes = yield api.fetchVotes();

    yield put({
      type: FETCH_VOTES_SUCCESS,
      data: votes.data
    });
  } catch (error) {
    yield put({
      type: FETCH_VOTES_FAILED,
      message: error.message
    });
  }
}

export function* fetchVotesByRegion(action) {
  try {
    const votes = yield api.fetchVotesByRegion(action.data.id);

    yield put({
      type: FETCH_VOTES_BY_REGION_SUCCESS,
      data: votes.data
    });
  } catch (error) {
    yield put({
      type: FETCH_VOTES_BY_REGION_FAILED,
      message: error.message
    });
  }
}

export default function* votesSaga() {
  yield all([
    takeEvery(FETCH_VOTES, fetchVotes),
    takeEvery(FETCH_VOTES_BY_REGION, fetchVotesByRegion),
  ]);
}

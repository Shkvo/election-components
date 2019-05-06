import { all, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_TOTAL_USERS,
  FETCH_TOTAL_USERS_SUCCESS,
  FETCH_TOTAL_USERS_FAILED
} from '../types';

export function* fetchTotalUsers() {
  try {
    const { data } = yield api.fetchTotalUsers();

    yield put({
      type: FETCH_TOTAL_USERS_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: FETCH_TOTAL_USERS_FAILED,
      message: error.message
    });
  }
}

export default function* votesSaga() {
  yield all([
    takeEvery(FETCH_TOTAL_USERS, fetchTotalUsers)
  ]);
}

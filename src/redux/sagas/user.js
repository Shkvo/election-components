import { all, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_VOTE_BY_USER_ID,
  FETCH_VOTE_BY_USER_ID_SUCCESS,
  FETCH_VOTE_BY_USER_ID_FAILED
} from '../types';

export function* createUser(action) {
  try {
    const { data } = yield api.createUser(action.data.user);

    yield put({
      type: CREATE_USER_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: CREATE_USER_FAILED,
      message: error.message
    });
  }
}

export function* fetchUser(action) {
  try {
    const { data } = yield api.fetchUser(action.data.id);

    yield put({
      type: FETCH_USER_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: FETCH_USER_FAILED,
      message: error.message
    });
  }
}

export function* fetchVoteByUserId(action) {
  try {
    const { data } = yield api.fetchVoteByUserId(action.data.id);

    yield put({
      type: FETCH_VOTE_BY_USER_ID_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: FETCH_VOTE_BY_USER_ID_FAILED,
      message: error.message
    });
  }
}

export function* login(action) {
  try {
    const data = yield api.login(action.data.user);

    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.user.id);

    yield put({
      type: LOGIN_USER_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: LOGIN_USER_FAILED,
      message: error.message
    });
  }
}

export default function* userSaga() {
  yield all([
    takeEvery(CREATE_USER, createUser),
    takeEvery(LOGIN_USER, login),
    takeEvery(FETCH_USER, fetchUser),
    takeEvery(FETCH_VOTE_BY_USER_ID, fetchVoteByUserId)
  ]);
}

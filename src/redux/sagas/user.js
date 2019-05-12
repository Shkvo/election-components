import { all, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
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
    throw error;
  }
}

export default function* userSaga() {
  yield all([
    takeEvery(CREATE_USER, createUser)
  ]);
}

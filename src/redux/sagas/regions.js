import { all, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_REGIONS,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_FAILED
} from '../types';

export function* fetchRegions() {
  try {
    const { data } = yield api.fetchRegions();

    yield put({
      type: FETCH_REGIONS_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: FETCH_REGIONS_FAILED,
      message: error.message
    });
  }
}

export default function* regionsSaga() {
  yield all([
    takeEvery(FETCH_REGIONS, fetchRegions)
  ]);
}

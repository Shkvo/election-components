import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';

import {
  FETCH_REGIONS,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_FAILED,
  DELETE_REGION,
  DELETE_REGION_SUCCESS,
  DELETE_REGION_FAILED,
  CREATE_REGION,
  CREATE_REGION_SUCCESS,
  CREATE_REGION_FAILED,
  UPDATE_REGION,
  UPDATE_REGION_SUCCESS,
  UPDATE_REGION_FAILED
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

export function* deleteRegion(action) {
  try {
    yield call(api.deleteRegion, action.data.id);
    yield put({
      type: DELETE_REGION_SUCCESS,
      data: {
        id: action.data.id
      }
    });
  } catch (error) {
    yield put({
      type: DELETE_REGION_FAILED,
      message: error.message
    });
  }
}

export function* createRegion(action) {
  try {
    const { data } = yield api.createRegion(action.data.region);

    yield put({
      type: CREATE_REGION_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: CREATE_REGION_FAILED,
      message: error.message
    });
  }
}

export function* updateRegion(action) {
  try {
    const { data } = yield api.updateRegion(action.data.region);

    yield put({
      type: UPDATE_REGION_SUCCESS,
      data
    });
  } catch (error) {
    yield put({
      type: UPDATE_REGION_FAILED,
      message: error.message
    });
  }
}

export default function* regionsSaga() {
  yield all([
    takeEvery(FETCH_REGIONS, fetchRegions),
    takeEvery(DELETE_REGION, deleteRegion),
    takeEvery(CREATE_REGION, createRegion),
    takeEvery(UPDATE_REGION, updateRegion)
  ]);
}

// @flow
import { takeLatest, put, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import {
  TRAININGS_FETCH_REQUEST,
  TRAININGS_FETCH_SUCCEEDED,
  TRAININGS_FETCH_FAILED
} from "./trainingsActions";
import TrainingsApi from "./trainingsApi";

function* fetchTrainings() {
  try {
    const trainings = yield call(TrainingsApi.fetchTrainings);
    yield put({ type: TRAININGS_FETCH_SUCCEEDED, trainings });
  } catch (e) {
    yield put({ type: TRAININGS_FETCH_FAILED, message: e.message });
  }
}

function* trainingsSaga(): Saga<void> {
  yield [yield takeLatest(TRAININGS_FETCH_REQUEST, fetchTrainings)];
}

export default trainingsSaga;

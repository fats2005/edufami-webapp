import { takeLatest, put, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import { FETCH_UNIT_REQUEST, FETCH_UNIT_SUCCESS, FETCH_UNIT_FAILURE } from "./unitActions";
import UnitApi from "./unitApi";

function* fetchUnit({ id }) {
  try {
    const unit = yield call(UnitApi.fetchUnit, { id });

    if (unit.Errors) {
      throw unit.Errors;
    }

    const lessons = yield call(UnitApi.fetchUnitLessons, { id });

    if (lessons.Errors) {
      throw lessons.Errors;
    }

    lessons.map(e => {
      // TODO Alejandro - Calculate this in the server
      e.lessons = 5;
      return e;
    });

    yield put({ type: FETCH_UNIT_SUCCESS, unit, lessons });
  } catch (e) {
    yield put({ type: FETCH_UNIT_FAILURE, message: e.message });
  }
}

function* trainingsSaga(): Saga<void> {
  yield [yield takeLatest(FETCH_UNIT_REQUEST, fetchUnit)];
}

export default trainingsSaga;

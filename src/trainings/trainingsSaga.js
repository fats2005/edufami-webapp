import { takeLatest, put, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import _ from "lodash";

import {
  FETCH_TRAININGS_REQUEST,
  FETCH_TRAININGS_SUCCESS,
  FETCH_TRAININGS_FAILURE
} from "./trainingsActions";
import TrainingsApi from "./trainingsApi";

function* fetchTrainings() {
  try {
    const data = yield call(TrainingsApi.fetchTrainings);
    if (data.Errors) {
      throw data.Errors;
    }
    const dataFiltered = _.filter(data, t => t.status === "published"); // TODO Alejandro - Manage this in the Server :)
    const dataOrdered = _.orderBy(dataFiltered, "created", "desc");
    yield put({ type: FETCH_TRAININGS_SUCCESS, data: dataOrdered });
  } catch (e) {
    yield put({ type: FETCH_TRAININGS_FAILURE, message: e.message });
  }
}

function* trainingsSaga(): Saga<void> {
  yield [yield takeLatest(FETCH_TRAININGS_REQUEST, fetchTrainings)];
}

export default trainingsSaga;

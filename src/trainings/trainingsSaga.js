import { takeLatest, put, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import _ from "lodash";

import {
  TRAININGS_FETCH_REQUEST,
  TRAININGS_FETCH_SUCCEEDED,
  TRAININGS_FETCH_FAILED
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
    yield put({ type: TRAININGS_FETCH_SUCCEEDED, data: dataOrdered });
  } catch (e) {
    yield put({ type: TRAININGS_FETCH_FAILED, message: e.message });
  }
}

function* trainingsSaga(): Saga<void> {
  yield [yield takeLatest(TRAININGS_FETCH_REQUEST, fetchTrainings)];
}

export default trainingsSaga;

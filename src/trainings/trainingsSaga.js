import { takeLatest, put, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import _ from "lodash";

import {
  FETCH_TRAININGS_REQUEST,
  FETCH_TRAININGS_SUCCESS,
  FETCH_TRAININGS_FAILURE,
  FETCH_TRAINING_REQUEST,
  FETCH_TRAINING_SUCCESS,
  FETCH_TRAINING_FAILURE,
} from "./trainingsActions";
import TrainingsApi from "./trainingsApi";

function* fetchTrainings() {
  try {
    const data = yield call(TrainingsApi.fetchTrainings);
    if (data.Errors) {
      throw data.Errors;
    }
    const dataFiltered = _.filter(data, (t) => t.status === "published"); // TODO Alejandro - Manage this in the Server :)
    const dataOrdered = _.orderBy(dataFiltered, "created", "desc");
    yield put({ type: FETCH_TRAININGS_SUCCESS, data: dataOrdered });
  } catch (e) {
    yield put({ type: FETCH_TRAININGS_FAILURE, message: e.message });
  }
}

function* fetchTrainingById({ id }) {
  try {
    const training = yield call(TrainingsApi.fetchTraining, { id });

    if (training.Errors) {
      throw training.Errors;
    }

    const units = yield call(TrainingsApi.fetchTrainingUnits, { id });

    if (units.Errors) {
      throw units.Errors;
    }

    units.map((e) => {
      // TODO Alejandro - Calculate this in the server
      e.lessons = 5;
      return e;
    });

    yield put({ type: FETCH_TRAINING_SUCCESS, training, units });
  } catch (e) {
    yield put({ type: FETCH_TRAINING_FAILURE, message: e.message });
  }
}

function* trainingsSaga(): Saga<void> {
  yield [
    yield takeLatest(FETCH_TRAININGS_REQUEST, fetchTrainings),
    yield takeLatest(FETCH_TRAINING_REQUEST, fetchTrainingById),
  ];
}

export default trainingsSaga;

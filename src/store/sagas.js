import { fork, all } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import trainingsSaga from "../trainings/trainingsSaga";

export default function* rootSaga(): Saga<void> {
  yield all([fork(trainingsSaga)]);
}

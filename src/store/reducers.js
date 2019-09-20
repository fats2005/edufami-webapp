import { combineReducers } from "redux";

import TrainingsReducer from "../trainings/trainingsReducer";

const rootReducer = combineReducers({
  trainings: TrainingsReducer
});

export default rootReducer;

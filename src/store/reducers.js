import { combineReducers } from "redux";

import TrainingsReducer from "../trainings/trainingsReducer";
import UnitReducer from "../unit/unitReducer";

const rootReducer = combineReducers({
  trainings: TrainingsReducer,
  unit: UnitReducer
});

export default rootReducer;

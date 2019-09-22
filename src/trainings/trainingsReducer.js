import {
  TRAININGS_FETCH_REQUEST,
  TRAININGS_FETCH_FAILED,
  TRAININGS_FETCH_SUCCEEDED
} from "./trainingsActions";

const initialState = {
  fetching: false,
  trainings: []
};

const trainingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAININGS_FETCH_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case TRAININGS_FETCH_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        trainings: action.data
      };
    case TRAININGS_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message
      };
    default:
      return state;
  }
};

export default trainingsReducer;

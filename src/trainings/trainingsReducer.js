import {
  FETCH_TRAININGS_REQUEST,
  FETCH_TRAININGS_FAILURE,
  FETCH_TRAININGS_SUCCESS,
  FETCH_TRAINING_REQUEST,
  FETCH_TRAINING_FAILURE,
  FETCH_TRAINING_SUCCESS
} from "./trainingsActions";

const initialState = {
  fetching: false,
  trainings: [],
  training: {},
  units: []
};

const trainingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAININGS_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_TRAININGS_SUCCESS:
      return {
        ...state,
        fetching: false,
        trainings: action.data
      };
    case FETCH_TRAININGS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.message
      };
    case FETCH_TRAINING_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_TRAINING_SUCCESS:
      return {
        ...state,
        fetching: false,
        training: action.training,
        units: action.units
      };
    case FETCH_TRAINING_FAILURE:
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

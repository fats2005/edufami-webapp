import { FETCH_UNIT_REQUEST, FETCH_UNIT_FAILURE, FETCH_UNIT_SUCCESS } from "./unitActions";

const initialState = {
  fetching: false,
  unit: {},
  lessons: [],
};

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNIT_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_UNIT_SUCCESS:
      return {
        ...state,
        fetching: false,
        unit: action.unit,
        lessons: action.lessons,
      };
    case FETCH_UNIT_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default unitReducer;

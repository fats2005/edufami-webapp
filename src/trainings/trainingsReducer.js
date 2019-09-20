import { TRAININGS_FETCH_REQUEST } from "./trainingsActions";

const initialState = {};

const trainingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAININGS_FETCH_REQUEST:
      return [
        ...state
        // {
        //   text: action.text,
        //   completed: false
        // }
      ];
    default:
      return state;
  }
};

export default trainingsReducer;

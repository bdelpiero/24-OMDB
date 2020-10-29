import { RECEIVE_MOVIE, RECEIVE_MOVIES } from "../constants";

const initialState = {
  list: [],
  selected: {},
};

export default (state = initialState, action) => {
  console.log("movies");
  switch (action.type) {
    case RECEIVE_MOVIE:
      return {
        ...state,
        selected: action.movie,
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    default:
      return state;
  }
};

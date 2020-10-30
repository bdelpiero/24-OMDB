import { RECEIVE_FAVS, ADD_TO_FAVS } from "../constants";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FAVS:
      return {
        ...state,
        list: action.favs,
      };
    case ADD_TO_FAVS:
      return {
        ...state,
        list: [...state.list, action.fav],
      };
    default:
      return state;
  }
};

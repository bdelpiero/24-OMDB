// Por ahora favs es solo un array de pelis.
// Después va a ser un array de listas de favs (ver Playlist en Juke)

import { RECEIVE_FAV, RECEIVE_FAVS, ADD_TO_FAVS } from "../constants";

const initialState = {
  list: [],
  selected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FAV:
      return {
        ...state,
        selected: action.fav,
      };
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

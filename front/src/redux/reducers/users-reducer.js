import { RECEIVE_USERS, ADD_TO_USERS } from "../constants";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_USERS:
      return { ...state, list: [...state.list, action.user] };
    case RECEIVE_USERS:
      return {
        ...state,
        list: action.users,
      };
    default:
      return state;
  }
};

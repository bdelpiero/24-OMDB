import { RECEIVE_USER, RECEIVE_USERS, ADD_TO_USERS } from "../constants";

const initialState = {
  list: [],
  selected: {},
};

export default (state = initialState, action) => {
  console.log("users");
  switch (action.type) {
    case ADD_TO_USERS:
      return { ...state, list: [...state.list, action.user] };
    case RECEIVE_USER:
      return {
        ...state,
        selected: action.user,
      };
    case RECEIVE_USERS:
      return {
        ...state,
        list: action.users,
      };
    default:
      return state;
  }
};

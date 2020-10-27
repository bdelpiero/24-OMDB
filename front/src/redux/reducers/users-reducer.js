import { RECEIVE_USER, RECEIVE_USERS } from "../actions/users";

const initialState = {
  list: [
    { id: 1, userName: "Juan", age: 34, email: "test@mail.com" },
    { id: 2, userName: "Tomás", age: 23, email: "test1@mail.com" },
    { id: 3, userName: "Martín", age: 30, email: "test2@mail.com" },
  ],
  selected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
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

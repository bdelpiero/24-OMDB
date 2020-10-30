import axios from "axios";
import { RECEIVE_USERS, ADD_TO_USERS } from "../constants";

export const addToUsers = (user) => ({
  type: ADD_TO_USERS,
  user,
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUsers = () => (dispatch) => {
  return axios
    .get("/api/users")
    .then((res) => res.data)
    .then((users) => dispatch(receiveUsers(users)));
};

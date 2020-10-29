import axios from "axios";
import { RECEIVE_USER, RECEIVE_USERS, ADD_TO_USERS } from "../constants";

export const addToUsers = (user) => ({
  type: ADD_TO_USERS,
  user,
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUsers = () => (dispatch) => {
  return axios
    .get("/api/users")
    .then((res) => res.data)
    .then((users) => dispatch(receiveUsers(users)));
};

// export const addUser = (user) => (dispatch) => {
//   console.log(user);
//   return axios
//     .post(`../api/users`, { user })
//     .then((res) => res.data)
//     .then((user) => {
//       dispatch(addToUsers(user));
//     });
// };

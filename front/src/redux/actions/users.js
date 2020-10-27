import axios from "axios";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/users";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUsers = () => (dispatch) => {
  // pedido axios al server (localhost 8080)
};

export const fetchUser = (userId) => (dispatch) => {
  // pedido axios al server? o podemos hacerlo directo desde el array de users?
};

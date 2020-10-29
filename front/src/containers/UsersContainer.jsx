import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useInput } from "../utils/custom-hooks";
import { fetchUsers } from "../redux/actions/users";
import { UserContext } from "../index";
import axios from "axios";

import Users from "../components/Users.jsx";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);

  const users = useSelector((state) => state.users.list);
  const userSearch = useInput("userSearch");
  console.log(users.length);
  const filteredUsers = users.filter((users) =>
    users.userName.toLowerCase().match(userSearch.value.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    axios.get("/api/users").catch(() => {
      history.push("/register");
    });
  }, []);

  const backToHome = () => {
    history.push("/");
  };

  return (
    <Users user={user} users={filteredUsers} backToHome={backToHome} userSearch={userSearch} />
  );
};

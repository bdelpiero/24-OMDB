import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useInput } from "../utils/custom-hooks";

import Users from "../components/Users.jsx";

export default () => {
  const history = useHistory();

  const users = useSelector((state) => state.users.list);
  const userSearch = useInput("userSearch");
  const filteredUsers = users.filter((users) =>
    users.userName.toLowerCase().match(userSearch.value.toLowerCase())
  );

  const backToHome = () => {
    history.push("/");
  };

  return <Users users={filteredUsers} backToHome={backToHome} userSearch={userSearch} />;
};

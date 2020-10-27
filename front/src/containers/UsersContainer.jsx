import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Users from "../components/Users.jsx";

export default () => {
  const users = useSelector((state) => state.users.list);
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
  };

  return <Users users={users} backToHome={backToHome} />;
};

import React, { useContext, useState } from "react";
import { useInput } from "../utils/custom-hooks";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory, useRouteMatch } from "react-router";
import LoginRegister from "../components/LoginRegister";
import { UserContext } from "../index";
import { addToUsers } from "../redux/actions/users";

export default ({}) => {
  const userName = useInput("userName");
  const email = useInput("email");
  const password = useInput("password");
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/register", {
        userName: userName.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .then((user) => dispatch(addToUsers(user)))
      .then(() => {
        setIsLoading(false);
        setError(false);
        history.push("/login");
      })
      .catch(({ response }) => {
        setIsLoading(false);
        setError(true);
        console.log(response.status);
      });
  };

  return (
    <LoginRegister
      userName={userName}
      email={email}
      password={password}
      isRegister={true}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
};

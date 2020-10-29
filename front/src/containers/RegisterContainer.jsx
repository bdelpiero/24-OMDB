import React, { useContext } from "react";
import { useInput } from "../utils/custom-hooks";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory, useRouteMatch } from "react-router";
import LoginRegister from "../components/LoginRegister";
import { UserContext } from "../index";
import { addToUsers } from "../redux/actions/users";

export default ({}) => {
  /* useInput trae un objeto con tres propiedades.
  Lo desestructuramos en el <input> y con eso
  le agregamos los atributos name, onChange y value
  */
  const { setUser } = useContext(UserContext);
  const userName = useInput("userName");
  const email = useInput("email");
  const password = useInput("password");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", {
        userName: userName.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .then((user) => dispatch(addToUsers(user)))
      .then(() => history.push("/login"))
      .catch(({ response }) => {
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
    />
  );
};

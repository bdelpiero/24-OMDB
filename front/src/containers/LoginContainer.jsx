import React, { useContext } from "react";
import { useInput } from "../utils/custom-hooks";
import axios from "axios";
import { useHistory, useRouteMatch } from "react-router";
import LoginRegister from "../components/LoginRegister";
import { UserContext } from "../index";

export default ({}) => {
  /* useInput trae un objeto con tres propiedades.
  Lo desestructuramos en el <input> y con eso
  le agregamos los atributos name, onChange y value
  */
  const email = useInput("email");
  const password = useInput("password");

  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        email: email.value,
        password: password.value,
      })
      .then(({ data }) => {
        setUser(data);
      })
      .then(() => history.push("/"))
      .catch(({ response }) => {
        console.log(response.status);
      });
  };
  return <LoginRegister email={email} password={password} handleSubmit={handleSubmit} />;
};

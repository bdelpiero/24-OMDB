import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../index";
import NavBar from "../components/NavBar";

export default () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    axios
      .post("/api/logout")
      .then(() => {
        setUser({});
        history.push("/");
      })
      .catch(({ response }) => {
        console.log(response.status);
      });
  };

  return <NavBar user={user} handleLogout={handleLogout} />;
};

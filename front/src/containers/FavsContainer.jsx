import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Favs from "../components/Favs.jsx";

export default () => {
  const favs = useSelector((state) => state.favs.list);
  const history = useHistory();

  const backToSearch = () => {
    history.push("/");
  };
  const removeItem = (fav) => {
    // lo borramos directo de la db, no del estado?
    console.log(fav);
    // deleteTodo(e) {
    //   e.stopPropagation();
    //   const todo = e.currentTarget.parentElement;
    //   axios.delete(`http://localhost:1337/api/items/${todo.id}`).then(() => this.props.fetchTodos());
    // }
  };

  return <Favs favs={favs} backToSearch={backToSearch} removeItem={removeItem} />;
};

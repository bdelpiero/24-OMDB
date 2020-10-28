import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useParams } from "react-router";
// import { fetchUser } from "../redux/actions/users";
import SingleUser from "../components/SingleUser";

// Esto habría que hacerlo con un dispatch cuando tenga la db
const getUser = (users, id) => {
  return users.filter((user) => user.id == id)[0];
};

export default () => {
  const { path, url } = useRouteMatch();
  const { userId } = useParams();

  const favs = useSelector((state) => state.favs.list);
  const currentUser = useSelector((state) => getUser(state.users.list, userId));

  return <SingleUser user={currentUser} favs={favs} path={path} url={url} />;
};

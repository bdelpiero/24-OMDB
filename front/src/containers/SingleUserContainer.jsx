import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useParams, useHistory } from "react-router";
import SingleUser from "../components/SingleUser";
import axios from "axios";
import { UserContext } from "../index";
import { fetchUsers } from "../redux/actions/users";
import { fetchFavs } from "../redux/actions/favs";

// Esto habría que hacerlo con un dispatch cuando tenga la db
const filterByUser = (field, id, isFavs = false) => {
  const key = isFavs ? "userId" : "id";
  return field.filter((element) => element[key] == id);
};

export default () => {
  const { path, url } = useRouteMatch();
  const { userId } = useParams();
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const isLoggedIn = userId == user.id;
  const dispatch = useDispatch();

  // const favs = useSelector((state) => state.favs.list);
  const currentUser = useSelector((state) => filterByUser(state.users.list, userId)[0]);
  const userFavs = useSelector((state) => filterByUser(state.favs.list, userId, true));
  // console.log(user);

  useEffect(() => {
    dispatch(fetchFavs());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const removeUser = () => {
    axios.delete(`/api${url}`).then(() => {
      setUser({});
      history.push("/");
    });
  };
  const removeFav = (favId) => {
    axios.delete(`/api/favs/${favId}`).then(() => {
      dispatch(fetchFavs());
    });
  };
  const goToSearch = () => {
    history.push("/");
  };

  return (
    <SingleUser
      user={currentUser}
      favs={userFavs}
      path={path}
      url={url}
      removeUser={removeUser}
      isLoggedIn={isLoggedIn}
      removeFav={removeFav}
      goToSearch={goToSearch}
    />
  );
};

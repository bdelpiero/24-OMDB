import React, { useEffect, useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from "../index";
import axios from "axios";

import NavBarContainer from "../containers/NavBarContainer";
import SearchMoviesContainer from "../containers/SearchMoviesContainer";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import SingleUserContainer from "../containers/SingleUserContainer";
import UsersContainer from "../containers/UsersContainer";
import HomeContainer from "../containers/HomeContainer";
import UserFavourites from "./UserFavourites.jsx";
// import EditUserContainer from "./containers/EditUserContainer";

export default () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      })
      .catch(({ response }) => {
        console.log(response.status);
      });
  }, []);
  return (
    <div id='main'>
      <NavBarContainer />
      <div>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/search' component={SearchMoviesContainer} />
          <Route path='/movies/:movieId' exact component={SingleMovieContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/register' component={RegisterContainer} />
          <Route path='/users/:userId' component={SingleUserContainer} />
          <Route path='/users/:userId/favs' component={UserFavourites} />
          {/* <Route path='/users/:userId/edit' component={EditUserContainer} /> */}
          <Route path='/users' component={UsersContainer} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
};

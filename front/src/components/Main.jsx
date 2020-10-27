import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import SearchMoviesContainer from "../containers/SearchMoviesContainer";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import FavsContainer from "../containers/FavsContainer";
import Login from "../components/Login";
import Register from "../components/Register";
import SingleUserContainer from "../containers/SingleUserContainer";
import UsersContainer from "../containers/UsersContainer";
import axios from "axios";

import HomeContainer from "../containers/HomeContainer";
import UserFavourites from "./UserFavourites.jsx";

export default () => {
  // cheque la conexión con el back:
  // const [users, setUsers] = React.useState("");
  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/users")
  //     .then((res) => res.data)
  //     .then((usersServer) => setUsers(usersServer));
  // }, []);
  return (
    <div id='main'>
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/search' component={SearchMoviesContainer} />
          <Route path='/movies/:movieId' exact component={SingleMovieContainer} />
          <Route path='/favs' component={FavsContainer} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/user/:userId' component={SingleUserContainer} />
          <Route path='/user/:userId/favs' component={UserFavourites} />
          <Route path='/users' component={UsersContainer} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
};

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import axios from "axios";

import HomeContainer from "../containers/HomeContainer";
// import Register from "./Register.jsx";
// import Login from "./Login.jsx";
// import ForgotPassword from "./ForgotPassword.jsx";

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
          {/* <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route path='/search' component={SearchMoviesContainer} />
        <Route path='/movie/:movieId' exact component={SingleMovieContainer} />
        <Route path='/favs' component={FavsContainer} />
        <Route path='/user/:userId/favs' component={UserFavsContainer} />
        <Route path='/user/:userId' component={SingleUserContainer} />
        <Route path='/users' component={UsersContainer} /> */}
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
};

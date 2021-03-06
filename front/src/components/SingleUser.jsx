import React from "react";
import UserInfo from "./UserInfo.jsx";
import UserFavourites from "./UserFavourites.jsx";
import { Link, Route } from "react-router-dom";

export default ({
  user,
  favs,
  path,
  url,
  removeUser,
  removeFav,
  isLoggedIn,
  goToSearch,
}) => {
  return (
    <div className='card text-center user-card'>
      <div className='card-header' style={{ backgroundColor: "black" }}>
        <ul className='nav nav-tabs card-header-tabs'>
          <li className='nav-item'>
            <Link className='nav-link' to={`${url}/info`}>
              Info
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={`${url}/favs`}>
              Favourites
            </Link>
          </li>
        </ul>
      </div>
      <div className='card-body' style={{ border: "5px black solid" }}>
        <Route
          path={`${path}/info`}
          render={() => (
            <UserInfo
              user={user}
              removeUser={removeUser}
              isLoggedIn={isLoggedIn}
            />
          )}
        />
        <Route
          exact
          path={`${path}`}
          render={() => (
            <UserInfo
              user={user}
              removeUser={removeUser}
              isLoggedIn={isLoggedIn}
            />
          )}
        />
        <Route
          path={`${path}/favs`}
          render={() => (
            <UserFavourites
              favs={favs}
              isLoggedIn={isLoggedIn}
              removeFav={removeFav}
              goToSearch={goToSearch}
            />
          )}
        />
      </div>
    </div>
  );
};

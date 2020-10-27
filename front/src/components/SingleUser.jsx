import React from "react";
import UserInfo from "./UserInfo.jsx";
import UserFavourites from "./UserFavourites.jsx";
import { Link, Route } from "react-router-dom";

export default ({ user, favs, path, url }) => (
  <div className='card text-center user-card'>
    <div className='card-header bg-dark'>
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
    <div className='card-body'>
      <Route path={`${path}/info`} render={() => <UserInfo user={user} />} />
      <Route path={`${path}/favs`} render={() => <UserFavourites favs={favs} />} />
    </div>
  </div>
);
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../index";

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
  return (
    <nav className='navbar fixed-top navbar-expand-md navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        OMDb
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Search <span className='sr-only'></span>
            </Link>
          </li>
        </ul>

        {user.id ? (
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/users/${user.id}`}>
                Account
              </Link>
            </li>
            <li className='nav-item'>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

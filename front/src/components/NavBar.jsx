import React from "react";
import { Link } from "react-router-dom";

export default () => {
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
          <li className='nav-item'>
            <Link className='nav-link' to='/favs'>
              Favourites <span className='sr-only'></span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/users'>
              Users
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/user/1'>
              Account
            </Link>
          </li>
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
      </div>
    </nav>
  );
};

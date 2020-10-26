import React from "react";
import { Link } from "react-dom";

export default () => {
  return (
    <nav className='navbar fixed-top navbar-expand-md navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        OMDb
      </a>
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
            <a className='nav-link' href='#'>
              Serch <span className='sr-only'></span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Favourites <span className='sr-only'></span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Users
            </a>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href="{{ url('/login') }}">
              Login
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="{{ url('/register') }}">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

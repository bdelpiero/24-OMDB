import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default ({ user, handleLogout }) => (
  <Navbar collapseOnSelect expand='lg' fixed='top' bg='dark' variant='dark' className='navbar'>
    <Navbar.Brand>
      <Link className='navbar-brand' to='/'>
        <h3>OMDb</h3>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav>
          <Link className='nav-link' to='/'>
            Search <span className='sr-only'></span>
          </Link>
        </Nav>
      </Nav>

      {user.id ? (
        <Nav className='nav-right'>
          <Nav>
            <Link className='nav-link' to='/users'>
              Users
            </Link>
          </Nav>
          <Nav>
            <Link className='nav-link' to={`/users/${user.id}`}>
              My Account
            </Link>
          </Nav>
          <Nav className='nav-badge'>
            <h3>
              <Badge variant='warning' onClick={handleLogout}>
                Logout
              </Badge>
            </h3>
          </Nav>
        </Nav>
      ) : (
        <Nav className='nav-right'>
          <Nav>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </Nav>
          <Nav className='nav-badge'>
            <Link className='nav-link' to='/register'>
              <h3>
                <Badge variant='warning'>Register</Badge>
              </h3>
            </Link>
          </Nav>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
);

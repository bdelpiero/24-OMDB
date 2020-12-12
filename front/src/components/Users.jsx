import React from "react";
import { Link } from "react-router-dom";

export default ({ users, backToHome, userSearch }) => (
  <div className='container'>
    <div className='list-header'>
      <form className='form-group users-form' style={{ margin: 0 }}>
        <input
          className='form-control '
          placeholder='Filter users'
          {...userSearch}
          style={{ minWidth: "110px", border: "3px black solid" }}
        />
      </form>
      <button
        className='btn btn-danger'
        onClick={backToHome}
        style={{ minWidth: "110px" }}>
        Back to Home
      </button>
    </div>
    <ul className='list-group'>
      {users &&
        users.map((user) => {
          return (
            <li
              className='list-group-item  list-items d-flex justify-content-between align-items-center'
              key={user.id}>
              <span>
                <img
                  style={{ height: "50px", borderRadius: "50%" }}
                  src={user.imgURI}
                />
              </span>
              <Link style={{ textDecoration: "none" }} to={`/users/${user.id}`}>
                {user.userName}
              </Link>
            </li>
          );
        })}
    </ul>
  </div>
);

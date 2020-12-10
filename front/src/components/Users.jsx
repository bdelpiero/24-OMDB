import React from "react";
import { Link } from "react-router-dom";

export default ({ users, backToHome, userSearch }) => (
  <div className='container'>
    <div className='list-header'>
      <form className='form-group users-form' style={{ marginTop: "20px" }}>
        <input
          className='form-control bg-dark text-white border-primary'
          placeholder='Filter users'
          {...userSearch}
          style={{ minWidth: "110px" }}
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
              className='list-group-item bg-dark d-flex justify-content-between align-items-center'
              key={user.id}>
              <Link style={{ textDecoration: "none" }} to={`/users/${user.id}`}>
                {user.userName}
              </Link>
              <span>
                <img style={{ height: "50px" }} src={user.imgURI} />
              </span>
            </li>
          );
        })}
    </ul>
  </div>
);

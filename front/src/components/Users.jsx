import React from "react";
import { Link } from "react-router-dom";

export default ({ users, backToHome, userSearch }) => (
  <div>
    <div className='list-header'>
      <h4>Users: </h4>
      <form className='form-group' style={{ marginTop: "20px" }}>
        <input className='form-control' placeholder='Search user' {...userSearch} />
      </form>
      <button className='btn btn-primary' onClick={backToHome}>
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
              <Link style={{ textDecoration: "none" }} to={`/user/${user.id}`}>
                {user.userName}
              </Link>
            </li>
          );
        })}
    </ul>
  </div>
);

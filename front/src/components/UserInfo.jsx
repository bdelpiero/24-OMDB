import React from "react";

export default ({ user }) => (
  <div className='user-info'>
    <div className='img-container'>
      <img src='/img/default-user-image.png' className='img-thumbnail' />
    </div>
    <div className='content'>
      <h3>{user.userName}</h3>
      <h5>Email:</h5>
      <p>{user.email}</p>
      <h5>Age:</h5>
      <p>{user.age}</p>
      <div className='user-buttons'>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-primary'>Delete Account</button>
      </div>
    </div>
  </div>
);

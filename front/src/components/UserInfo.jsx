import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default ({ user, removeUser, isLoggedIn }) => (
  <div>
    {user && (
      <div className='user-info'>
        <div className='img-container'>
          <img src={user.imgURI} className='img-thumbnail' />
        </div>

        <div className='content'>
          <h3>{user.userName}</h3>
          <h5>Email:</h5>
          <p>{user.email}</p>
          <h5>Age:</h5>
          <p>{user.age}</p>
          {isLoggedIn && (
            <div className='user-buttons'>
              {/* <button className='btn btn-primary'>Edit</button> */}
              <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                  <Tooltip id='tooltip-top'>No llegué, perdón!</Tooltip>
                }>
                <button className='btn btn-danger'>Edit</button>
              </OverlayTrigger>
              <button className='btn btn-danger' onClick={() => removeUser()}>
                Delete Account
              </button>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

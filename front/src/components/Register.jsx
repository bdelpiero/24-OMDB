import React from "react";

export default ({}) => (
  <div className='card login-register'>
    <article className='card-body'>
      <h4 className='card-title mb-4 mt-1'>Register</h4>
      <p>
        <a href='' className='btn btn-block btn-outline-info'>
          {" "}
          <i className='fab fa-twitter'></i>   Login via Twitter
        </a>
        <a href='' className='btn btn-block btn-outline-primary'>
          {" "}
          <i className='fab fa-facebook-f'></i>   Login via facebook
        </a>
      </p>
      <hr />
      <form style={{ margin: "50px 5%" }}>
        <div className='form-group'>
          <input name='username' className='form-control' placeholder='Username' type='text' />
        </div>
        <div className='form-group'>
          <input name='email' className='form-control' placeholder='Email' type='email' />
        </div>
        <div className='form-group'>
          <input name='password' className='form-control' placeholder='******' type='password' />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-block'>
                {" "}
                Sign up{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </article>
  </div>
);

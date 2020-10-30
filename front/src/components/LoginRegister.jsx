import React from "react";

export default ({ userName = "", email, password, isRegister = false, handleSubmit }) => {
  return (
    <div className='card login-register'>
      <article className='card-body'>
        <h4 className='card-title mb-4 mt-1 text-center'>{isRegister ? "Register" : "Login"}</h4>
        <p>
          <a href='/auth/facebook' className='btn btn-block btn-outline-primary'>
            {" "}
            Login via facebook
          </a>
        </p>
        <hr />
        <form onSubmit={handleSubmit} className='login-register-form'>
          {isRegister && (
            <div className='form-group'>
              <input className='form-control' placeholder='Username' type='text' {...userName} />
            </div>
          )}
          <div className='form-group'>
            <input className='form-control' placeholder='Email' type='email' {...email} />
          </div>
          <div className='form-group'>
            <input
              name='password'
              className='form-control'
              placeholder='******'
              type='password'
              {...password}
            />
          </div>
          <div className='row text-center'>
            <div className='col-md-6'>
              <button type='submit' className='d-inline-block btn btn-primary btn-lg  btn-block '>
                {" "}
                {isRegister ? "Sign up" : "Login"}{" "}
              </button>
            </div>
          </div>
        </form>
      </article>
    </div>
  );
};

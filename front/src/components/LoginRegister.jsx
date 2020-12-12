import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export default ({
  userName = "",
  email,
  password,
  isRegister = false,
  handleSubmit,
  isLoading,
  error,
}) => {
  return (
    <div className='form-container'>
      <div
        className='card login-register'
        style={{ border: "black solid 10px" }}>
        <article className='card-body'>
          <h4 className='card-title mb-4 mt-1 text-center'>
            {isRegister ? "Register" : "Login"}
          </h4>
          {error && (
            <Alert variant='danger' style={{ textAlign: "center" }}>
              Invalid email or password
            </Alert>
          )}
          {/* <p>
          <a
            href='/auth/facebook'
            className='btn btn-block btn-outline-primary'>
            {" "}
            Login via facebook
          </a>
        </p> */}
          <hr />
          <form onSubmit={handleSubmit} className='login-register-form'>
            {isRegister && (
              <div className='form-group'>
                <input
                  className='form-control'
                  placeholder='Username'
                  type='text'
                  {...userName}
                />
              </div>
            )}
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='Email'
                type='email'
                {...email}
              />
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
            <div
              className='row text-center'
              style={{ justifyContent: "center", marginTop: 30 }}>
              <div className='col-md-6'>
                {isLoading && (
                  <Spinner
                    animation='border'
                    variant='primary'
                    style={{ marginBottom: 20 }}
                  />
                )}
                <button
                  type='submit'
                  className='d-inline-block btn btn-danger btn-lg  btn-block '>
                  {" "}
                  {isRegister ? "Sign up" : "Login"}{" "}
                </button>
              </div>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
};

import React from "react";
import { useInput } from "../utils/custom-hooks";

export default ({}) => {
  /* useInput trae un objeto con tres propiedades.
  Lo desestructuramos en el <input> y con eso
  le agregamos los atributos name, onChange y value
  */
  const email = useInput("email");
  const password = useInput("password");
  return (
    <div className='card login-register'>
      <article className='card-body'>
        <h4 className='card-title mb-4 mt-1'>Login</h4>
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
            <input className='form-control' placeholder='Email' type='email' {...email} />
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='******' type='password' {...password} />
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                  {" "}
                  Login{" "}
                </button>
              </div>
            </div>
            <div className='col-md-6 text-right'>
              <a className='small' href='#'>
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </article>
    </div>
  );
};

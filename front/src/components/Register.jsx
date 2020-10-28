import React from "react";
import { useInput } from "../utils/custom-hooks";

export default ({}) => {
  /* useInput trae un objeto con tres propiedades.
  Lo desestructuramos en el <input> y con eso
  le agregamos los atributos name, onChange y value
  */
  const userName = useInput("userName");
  const email = useInput("email");
  const password = useInput("password");

  return (
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
            <input className='form-control' placeholder='Username' type='text' {...userName} />
          </div>
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
};

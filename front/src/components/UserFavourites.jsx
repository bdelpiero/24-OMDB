import React from "react";
import { Link } from "react-router-dom";

export default ({ favs, isLoggedIn, removeFav, goToSearch }) => (
  <div>
    {isLoggedIn && (
      <button
        className='btn btn-danger'
        style={{ marginBottom: "15px" }}
        onClick={goToSearch}>
        + Add new movie
      </button>
    )}
    <ul className='list-group'>
      {favs &&
        favs.map((fav) => {
          return (
            <li
              className=' list-group-item d-flex justify-content-between align-items-center list-items'
              key={fav.imdbID}>
              <div className='d-flex justify-content-start align-items-center'>
                <img src={fav.Poster} style={{ height: "70px" }} alt='No img' />
                <Link
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                  to={`/movies/${fav.imdbID}`}>
                  {fav.Title}
                </Link>
              </div>
              <span>
                {isLoggedIn && (
                  <svg
                    onClick={() => removeFav(fav.id)}
                    width='2em'
                    height='2em'
                    viewBox='0 0 16 16'
                    className='bi bi-trash icon'
                    color='black'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                    <path
                      fill-rule='evenodd'
                      d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                    />
                  </svg>
                )}
              </span>
            </li>
          );
        })}
    </ul>
  </div>
);

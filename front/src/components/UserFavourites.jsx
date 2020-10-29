import React from "react";
import { Link } from "react-router-dom";

export default ({ favs, isLoggedIn, removeFav, goToSearch }) => (
  <div>
    {isLoggedIn && (
      <button className='btn btn-primary' style={{ marginBottom: "15px" }} onClick={goToSearch}>
        + Add new movie
      </button>
    )}
    <ul className='list-group'>
      {favs &&
        favs.map((fav) => {
          return (
            <li
              className='list-group-item bg-dark d-flex justify-content-between align-items-center'
              key={fav.imdbID}>
              <div className='d-flex justify-content-start align-items-center'>
                <img src={fav.Poster} style={{ height: "70px" }} alt='No img' />
                <Link
                  style={{ textDecoration: "none", marginLeft: "10px" }}
                  to={`/movies/${fav.imdbID}`}>
                  {fav.Title}
                </Link>
              </div>
              <span>
                {isLoggedIn && (
                  <i className='fa fa-trash fa-2x' onClick={() => removeFav(fav.id)}></i>
                )}
              </span>
            </li>
          );
        })}
    </ul>
  </div>
);

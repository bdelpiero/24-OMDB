import React from "react";
import { Link } from "react-router-dom";

export default ({ favs, backToSearch, removeItem }) => (
  <div>
    <div className='list-header'>
      <h4>Your Favourites: </h4>
      <button className='btn btn-primary' onClick={backToSearch}>
        Back to search
      </button>
    </div>
    <ul className='list-group'>
      {favs.map((fav) => {
        return (
          <li
            className='list-group-item bg-dark d-flex justify-content-between align-items-center'
            key={fav.imdbID}>
            <Link style={{ textDecoration: "none" }} to={`/movies/${fav.imdbID}`}>
              {fav.Title}
            </Link>
            <span onClick={() => removeItem(fav)}>
              <i className='fa fa-trash fa-2x'></i>
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

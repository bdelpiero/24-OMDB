import React from "react";
import { Link } from "react-router-dom";

export default ({ favs }) => (
  <ul className='list-group'>
    {favs &&
      favs.map((fav) => {
        return (
          <li
            className='list-group-item bg-dark d-flex justify-content-between align-items-center'
            key={fav.imdbID}>
            <Link style={{ textDecoration: "none" }} to={`/movies/${fav.imdbID}`}>
              {fav.Title}
            </Link>
            <span>
              <i className='fa fa-trash fa-2x'></i>
            </span>
          </li>
        );
      })}
  </ul>
);

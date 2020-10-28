import React from "react";
import { Link } from "react-router-dom";

export default ({ movies, backToSearch, handleClick, sortingKey }) => {
  return (
    <div id='movies-table'>
      <div className='table-header'>
        <h4>Movies found: </h4>
        <div className='table-buttons'>
          <div className='dropdown'>
            <button
              class='btn btn-primary dropdown-toggle'
              type='button'
              id='dropdownMenu2'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              {sortingKey || "Order By"}
            </button>
            <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>
              <button class='dropdown-item' type='button' onClick={handleClick}>
                Title
              </button>
              <button class='dropdown-item' type='button' onClick={handleClick}>
                Year
              </button>
            </div>
          </div>
          <button className='btn btn-primary' onClick={backToSearch}>
            Back to search
          </button>
        </div>
      </div>
      <table className='table table-hover table-dark'>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies &&
            movies
              .sort((a, b) => a[sortingKey] > b[sortingKey])
              .map((movie) => (
                <tr key={movie.imdbID}>
                  <td>
                    <img src={movie.Poster} alt=''></img>
                  </td>
                  <td>
                    <Link style={{ textDecoration: "none" }} to={`/movies/${movie.imdbID}`}>
                      {movie.Title}
                    </Link>
                  </td>
                  <td>{movie.Year}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

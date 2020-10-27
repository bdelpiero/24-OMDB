import React from "react";
import { Link } from "react-router-dom";

export default ({ movies, backToSearch }) => (
  <div id='movies-table'>
    <div className='table-header'>
      <h4>Movies found: </h4>
      <button className='btn btn-primary' onClick={backToSearch}>
        Back to search
      </button>
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
          movies.map((movie) => (
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

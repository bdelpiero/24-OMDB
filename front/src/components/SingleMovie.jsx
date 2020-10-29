import React from "react";
import usersReducer from "../redux/reducers/users-reducer";

export default ({ movie, handleButton, user }) => (
  <div id='single-movie'>
    {movie && (
      <div className='movie-info'>
        <h3>{movie.Title}</h3>
        <div className='movie-container'>
          <img src={movie.Poster} style={{ maxHeight: "550px" }} className='img-thumbnail' />
          <div className='content'>
            <h5>Director:</h5>
            <p>{movie.Director}</p>
            <h5>Writers:</h5>
            <p>{movie.Writer}</p>
            <h5>Stars:</h5>
            <p>{movie.Actors}</p>
            <h5>Metascore:</h5>
            <p>{movie.Metascore}</p>
            <h5>Review:</h5>
            <p>{movie.Plot}</p>
            {user.id && (
              <button className='btn btn-primary' onClick={handleButton}>
                + Add to Favourites
              </button>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);

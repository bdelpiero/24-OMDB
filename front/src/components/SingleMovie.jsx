import React from "react";

export default ({ movie }) => (
  <div id='single-movie'>
    {movie && (
      <div className='movie-info'>
        <h3>{movie.Title}</h3>
        <div className='movie-container'>
          <img src={movie.Poster} className='img-thumbnail' />
          <div className='content'>
            <p>{movie.Actors}</p>
            <p>{movie.Director}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Language}</p>
            <p>{movie.Metascore}</p>
          </div>
        </div>
      </div>
    )}
  </div>
);

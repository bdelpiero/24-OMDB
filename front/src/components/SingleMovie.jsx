import React from "react";
import Button from "react-bootstrap/Button";

const checkLength = (str) => {
  if (!str) return "-";
  if (str.length > 180) return str.substring(0, 180) + "...";
  return str;
};

export default ({ movie, handleButton, user, goBack }) => (
  <div id='single-movie'>
    {movie && (
      <div className='movie-info'>
        <div className='movie-header'>
          <h3>{movie.Title}</h3>
          <Button className='header-button btn-danger' onClick={goBack}>
            Back To Previous
          </Button>
        </div>
        <div className='movie-container'>
          <img
            src={movie.Poster}
            style={{ maxHeight: "550px" }}
            className='img-thumbnail'
          />
          <div className='content'>
            <h5>Director:</h5>
            <p>{checkLength(movie.Director)}</p>
            <h5>Writers:</h5>
            <p>{checkLength(movie.Writer)}</p>
            <h5>Stars:</h5>
            <p>{checkLength(movie.Actors)}</p>
            <h5>Metascore:</h5>
            <p>{movie.Metascore}</p>
            <h5>Review:</h5>
            <p>{checkLength(movie.Plot)}</p>
            {user.id && (
              <button className='btn btn-danger' onClick={handleButton}>
                + Add to Favourites
              </button>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);

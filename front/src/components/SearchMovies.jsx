import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default ({ movies, backToSearch, handleClick, sortingKey }) => {
  return (
    <div id='movies-table'>
      <div className='table-header'>
        <h4>Movies found: </h4>
        <div className='table-buttons'>
          <DropdownButton id='dropdown-basic-button' title={sortingKey || "Order By"}>
            <Dropdown.Item onClick={handleClick} href='#/action-1'>
              Year
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick} href='#/action-2'>
              Metascore
            </Dropdown.Item>
          </DropdownButton>
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
            <th>Metascore</th>
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
                  <td>{movie.Metascore}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

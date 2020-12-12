import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default ({
  movies,
  backToSearch,
  sortItems,
  sortingKey,
  user,
  handleButton,
}) => {
  return (
    <div id='movies-table' className='container'>
      <div className='table-header'>
        {/* <h4 className='table-header-title'>Movies found: </h4> */}
        <div className='table-buttons'>
          <DropdownButton
            id='dropdown-basic-button'
            variant='danger'
            title={sortingKey || "Order By"}>
            <Dropdown.Item onClick={sortItems} href='#/action-1'>
              Year
            </Dropdown.Item>
            <Dropdown.Item onClick={sortItems} href='#/action-2'>
              Metascore
            </Dropdown.Item>
          </DropdownButton>
          <button className='btn btn-danger' onClick={backToSearch}>
            Back to search
          </button>
        </div>
      </div>
      <table className='table table-hover'>
        <thead>
          <tr className='movies-table-header'>
            <th>Poster</th>
            <th className='movies-table-title'>Title</th>
            <th className='movies-table-year'>Year</th>
            <th className='text-center'>Metascore</th>
            {user.id && <th className='text-center'>Favourites</th>}
          </tr>
        </thead>
        <tbody>
          {movies &&
            movies
              .map((movie) => {
                movie.Year = movie.Year.substring(0, 4);
                return movie;
              })
              .map((movie) => {
                movie.Metascore =
                  movie.Metascore == "N/A" ? "" : movie.Metascore;
                return movie;
              })
              .sort((a, b) => b[sortingKey] - a[sortingKey])
              .map((movie) => (
                <tr key={movie.imdbID}>
                  <td>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/movies/${movie.imdbID}`}>
                      <img src={movie.Poster} alt=''></img>
                    </Link>
                  </td>
                  <td className='movies-table-title align-middle'>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/movies/${movie.imdbID}`}>
                      {movie.Title}
                    </Link>
                  </td>
                  <td className='movies-table-year align-middle'>
                    {movie.Year}
                  </td>
                  <td className='text-center align-middle'>
                    {movie.Metascore || "-"}
                  </td>
                  {user.id && (
                    <td className='text-center align-middle'>
                      <button
                        onClick={() => handleButton(movie)}
                        className='btn btn-dark'>
                        +
                      </button>
                    </td>
                  )}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchMovies from "../components/SearchMovies.jsx";

export default () => {
  const movies = useSelector((state) => state.movies.list);
  const history = useHistory();

  const backToSearch = () => {
    history.push("/");
  };

  return <SearchMovies movies={movies} backToSearch={backToSearch} />;
};

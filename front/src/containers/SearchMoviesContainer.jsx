import React from "react";
import { useSelector } from "react-redux";
import SearchMovies from "../components/SearchMovies.jsx";

export default ({ history }) => {
  const movies = useSelector((state) => state.movies.list);

  const backToSearch = () => {
    history.push("/");
  };

  return <SearchMovies movies={movies} backToSearch={backToSearch} />;
};

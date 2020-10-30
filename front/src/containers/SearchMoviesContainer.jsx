import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchMovies from "../components/SearchMovies.jsx";

export default () => {
  const movies = useSelector((state) => state.movies.list);
  const history = useHistory();
  const [sortingKey, setSortingKey] = useState("");

  const backToSearch = () => {
    history.push("/");
  };
  const sortItems = (e) => {
    setSortingKey(e.target.innerHTML);
  };

  return (
    <SearchMovies
      movies={movies}
      sortingKey={sortingKey}
      sortItems={sortItems}
      backToSearch={backToSearch}
    />
  );
};

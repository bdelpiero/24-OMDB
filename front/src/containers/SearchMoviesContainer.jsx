import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchMovies from "../components/SearchMovies.jsx";
import { UserContext } from "../index";
import { addMovie } from "../redux/actions/favs";

export default () => {
  const movies = useSelector((state) => state.movies.list);
  const history = useHistory();
  const [sortingKey, setSortingKey] = useState("");
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  const backToSearch = () => {
    history.push("/");
  };
  const sortItems = (e) => {
    setSortingKey(e.target.innerHTML);
  };
  const handleButton = (currentMovie) => {
    dispatch(addMovie(currentMovie))
      .then(() => history.push(`/users/${user.id}/favs`))
      .catch((err) => console.log(err));
  };

  return (
    <SearchMovies
      movies={movies}
      sortingKey={sortingKey}
      sortItems={sortItems}
      backToSearch={backToSearch}
      user={user}
      handleButton={handleButton}
    />
  );
};

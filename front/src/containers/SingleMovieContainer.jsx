import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../redux/actions/movies";
import SingleMovie from "../components/SingleMovie";

export default ({ match }) => {
  // const movies = useSelector((state) => state.movies.list);

  // const backToSearch = () => {
  //   history.push("/");
  // };
  const movieId = match.params.movieId;
  console.log(movieId);

  const currentMovie = useSelector((state) => state.movies.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, []);

  return <SingleMovie movie={currentMovie} />;
};

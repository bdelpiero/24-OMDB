import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../redux/actions/movies";
import { addToFavs } from "../redux/actions/favs";
import SingleMovie from "../components/SingleMovie";

export default () => {
  const { movieId } = useParams();

  const currentMovie = useSelector((state) => state.movies.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, []);

  const handleButton = () => {
    dispatch(addToFavs(currentMovie));
  };

  return <SingleMovie movie={currentMovie} handleButton={handleButton} />;
};

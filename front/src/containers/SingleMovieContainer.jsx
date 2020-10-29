import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchMovie } from "../redux/actions/movies";
import { addMovie } from "../redux/actions/favs";
import SingleMovie from "../components/SingleMovie";
import { UserContext } from "../index";

export default () => {
  const { movieId } = useParams();
  const { user } = useContext(UserContext);
  const history = useHistory();

  const currentMovie = useSelector((state) => state.movies.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, []);

  const handleButton = () => {
    dispatch(addMovie(currentMovie)).then(() => history.push(`/users/${user.id}/favs`));
  };

  return <SingleMovie movie={currentMovie} handleButton={handleButton} user={user} />;
};

import axios from "axios";
import { RECEIVE_MOVIES, RECEIVE_MOVIE } from "../constants";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const fetchMovies = ({ title = "", year = "", type = "" }) => (dispatch) => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=fa7732fb&s=${title}&y=${year}&type=${type}`)
    .then((res) => res.data)
    .then((movies) => dispatch(receiveMovies(movies.Search)))
    .catch((err) => console.log(err));
};

export const fetchMovie = (movieId) => (dispatch) => {
  return axios
    .get(`http://www.omdbapi.com/?apikey=fa7732fb&i=${movieId}`)
    .then((res) => res.data)
    .then((movie) => dispatch(receiveMovie(movie)))
    .catch((err) => console.log(err));
};

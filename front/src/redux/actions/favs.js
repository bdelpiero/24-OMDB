import axios from "axios";
import { RECEIVE_FAVS, ADD_TO_FAVS } from "../constants";

export const addToFavs = (fav) => ({
  type: ADD_TO_FAVS,
  fav,
});

const receiveFavs = (favs) => ({
  type: RECEIVE_FAVS,
  favs,
});

export const addMovie = (movie) => (dispatch) => {
  return axios
    .post("../api/favs", { movie })
    .then((res) => res.data)
    .then((fav) => {
      dispatch(addToFavs(fav));
    });
};

export const fetchFavs = () => (dispatch) => {
  return axios
    .get("/api/favs")
    .then((res) => res.data)
    .then((favs) => dispatch(receiveFavs(favs)));
};

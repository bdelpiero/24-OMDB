import axios from "axios";
import { RECEIVE_FAV, RECEIVE_FAVS, ADD_TO_FAVS } from "../constants";

export const addToFavs = (fav) => ({
  type: ADD_TO_FAVS,
  fav,
});

const receiveFavs = (favs) => ({
  type: RECEIVE_FAVS,
  favs,
});

const receiveFav = (fav) => ({
  type: RECEIVE_FAV,
  fav,
});

export const fetchFavs = () => (dispatch) => {
  // pedido axios al server (localhost 8080)
};

export const fetchFav = (userId) => (dispatch) => {
  // pedido axios al server (localhost 8080)
};

import { combineReducers } from "redux";
import moviesReducer from "./movies-reducer";
import favsReducer from "./favs-reducer";
import usersReducer from "./users-reducer";

export default combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  favs: favsReducer,
});

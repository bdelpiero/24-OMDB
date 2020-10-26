import { combineReducers } from "redux";
import moviesReducer from "./movies-reducer";

export default combineReducers({
  movies: moviesReducer,
  // lyrics: lyricsReducer,
  // player: playerReducer,
  // albums: albumsReducer,
  // artists: artistsReducer,
  // playlists: playlistsReducer,
  // songs: songsReducer,
});

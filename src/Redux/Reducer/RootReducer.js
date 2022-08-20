import React from "react";
import albumsReducer from "./albums";
import artistsReducer from "./artists";
import playlistReducer from "./playlists";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  playlist: playlistReducer,
});

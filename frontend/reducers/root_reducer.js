import { combineReducers } from 'redux';

import VideosReducer from './videos_reducer';
import SessionReducer from './session_reducer';
import FavoritesReducer from './favorites_reducer';

const RootReducer = combineReducers({
  videos: VideosReducer,
  session: SessionReducer,
  favorites: FavoritesReducer
});

export default RootReducer;

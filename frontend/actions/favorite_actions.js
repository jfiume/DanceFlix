import * as APIUtil from '../util/favorite_api_util';
import { fetchVideos } from './video_actions';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const ADD_FAVORITE = 'CREATE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const addFavorite = favorite => ({
  type: ADD_FAVORITE,
  favorite
});

export const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});

export const fetchFavorites = () => dispatch => (
  APIUtil.fetchFavorites().then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);

export const fetchFavoritesByUser = (userId) => dispatch => (
  APIUtil.fetchFavoritesByUser(userId).then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);

export const createFavorite = favorite => dispatch => (
  APIUtil.createFavorite(favorite).then(() => (
    dispatch(fetchVideos())
  ))
);


export const deleteFavorite = id => dispatch => (
  APIUtil.deleteFavorite(id).then((favorite) => (
    dispatch(fetchVideos()),
    dispatch(removeFavorite(favorite))
  ))
);

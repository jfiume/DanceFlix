import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const ADD_FAVORITE = 'CREATE_FAVORITE';
export const REMOVE_FAVORITE = 'DELETE_FAVORITE';

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
  APIUtil.fetchFavorites(userId).then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);

export const createFavorite = favorite => dispatch => (
  APIUtil.createFavorite(favorite).then(favorites => (
    dispatch(createFavorite(favorites))
  ))
);


export const deleteFavorite = favorite => dispatch => (
  APIUtil.deleteFavorite(favorite).then(favorites => (
    dispatch(deleteFavorite(favorites))
  ))
);
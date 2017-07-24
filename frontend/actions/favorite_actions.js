import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const CREATE_FAVORITE = 'CREATE_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const createFavorite = favorite => ({
  type: CREATE_FAVORITE,
  favorite
});

export const deleteFavorite = favorite => ({
  type: DELETE_FAVORITE,
  favorite
});

export const fetchFavorites = () => dispatch => (
  APIUtil.fetchFavorites().then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);

export const createFavoriteAsync = favorite => dispatch => (
  APIUtil.createFavorite(favorite).then(favorites => (
    dispatch(createFavorite(favorites))
  ))
);


export const deleteFavoriteAsync = favorite => dispatch => (
  APIUtil.deleteFavorite(favorite).then(favorites => (
    dispatch(deleteFavorite(favorites))
  ))
);

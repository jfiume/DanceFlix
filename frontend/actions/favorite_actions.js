import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
// export const CREATE_FAVORITE = 'CREATE_FAVORITE';
// export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});


export const fetchFavorites = () => dispatch => (
  APIUtil.fetchFavorites().then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);

export const createFavorite = favorite => dispatch => (
  APIUtil.createFavorite(favorite).then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);


export const deleteFavorite = favorite => dispatch => (
  APIUtil.deleteFavorite(favorite).then(favorites => (
    dispatch(receiveFavorites(favorites))
  ))
);

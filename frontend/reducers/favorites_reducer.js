import merge from 'lodash/merge';

import {
  RECEIVE_FAVORITES,
  CREATE_FAVORITE,
  DELETE_FAVORITE
} from '../actions/favorite_actions';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return merge({}, state, action.favorites);
    case CREATE_FAVORITE:
      const newFav = {[action.favorite.id]: action.favorite};
      return merge({}, state, newFav);
    case DELETE_FAVORITE:
      const nextState = merge({}, state);
      delete nextState[action.favorite.id];
      return nextState;
    default:
      return state;
  }
};

export default FavoritesReducer;

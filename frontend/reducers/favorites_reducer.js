import merge from 'lodash/merge';

import {
  RECEIVE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/favorite_actions';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return merge({}, state, action.favorites);
    case ADD_FAVORITE:
      const newFav = {[action.favorite.id]: action.favorite};
      return merge({}, state, newFav);
    case REMOVE_FAVORITE:
      const nextState = merge({}, state);
      delete nextState[action.favorite.id];
      return nextState;
    default:
      return state;
  }
};

export default FavoritesReducer;

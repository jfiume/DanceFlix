import merge from 'lodash/merge';

import {
  RECEIVE_VIEWS,
  RECEIVE_VIEW,
  ADD_VIEW
} from '../actions/view_actions';

const ViewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIEWS:
      return merge({}, state, action.views);
    case RECEIVE_VIEW:
      const newView = {[action.view.id]: action.view};
      return merge({}, state, newView);
    default:
      return state;
  }
};

export default ViewsReducer;

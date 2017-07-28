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
      return merge({}, action.views);
    case RECEIVE_VIEW:
      const newView = {[action.view.id]: action.view};
      return merge({}, newView);
    case ADD_VIEW:
      const count = {[action.view.count]: action.view.count + 1};
      return merge({}, count);
    default:
      return state;
  }
};

export default ViewsReducer;

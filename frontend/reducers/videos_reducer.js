import merge from 'lodash/merge';

import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO
} from '../actions/video_actions';

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return merge({}, state, action.videos);
    case RECEIVE_VIDEO:
      const newVideo = {[action.video.id]: action.video};
      return merge({}, state, newVideo);
    default:
      return state;
  }
};

export default VideosReducer;

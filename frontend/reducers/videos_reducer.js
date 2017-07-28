import merge from 'lodash/merge';

import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO
} from '../actions/video_actions';

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign({}, action.videos);
    case RECEIVE_VIDEO:
      const newVideo = {[action.video.id]: action.video};
      return Object.assign({}, newVideo);
    default:
      return state;
  }
};

export default VideosReducer;

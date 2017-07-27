import * as APIUtil from '../util/favorite_api_util';
import { fetchVideos, fetchVideo } from './video_actions';

export const RECEIVE_VIEWS = 'RECEIVE_VIEWS';
export const RECEIVE_VIEW = 'RECEIVE_VIEW';
export const ADD_VIEW = 'ADD_VIEW';

export const receiveViews = views => ({
  type: RECEIVE_VIEWS,
  views
});

export const receiveView = view => ({
  type: RECEIVE_VIEW,
  view
});

export const fetchViewsByUser = (userId) => dispatch => (
  APIUtil.fetchViewsByUser(userId).then(views => (
    dispatch(fetchVideos())
  ))
);

export const createView = (view) => dispatch => (
  APIUtil.createView(view).then(views => (
    dispatch(fetchVideos())
  ))
);

export const addView = (view) => dispatch => (
  APIUtil.addView(view).then(id => (
    dispatch(fetchVideo(id))
  ))
);

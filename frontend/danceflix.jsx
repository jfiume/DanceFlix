import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as APIUtilSession from './util/session_api_util';
import * as APIUtilVideos from './util/video_api_util';
import * as APIUtilViews from './util/view_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session : { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = APIUtilSession.login;
  window.signup = APIUtilSession.signup;
  window.logout = APIUtilSession.logout;
  window.fetchVideo = APIUtilVideos.fetchVideo;
  window.fetchVideos = APIUtilVideos.fetchVideos;
  window.fetchViewsByUser = APIUtilViews.fetchViewsByUser;
  window.createView = APIUtilViews.createView;
  window.addView = APIUtilViews.addView;


  ReactDOM.render(<Root store={store} />, root);
});

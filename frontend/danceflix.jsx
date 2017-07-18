import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configreStore from './store/store';

import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session : { currentUser: window.currentUser } };
    store = configreStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configreStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = APIUtil.login;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;

  ReactDOM.render(<Root store={store} />, root);
});

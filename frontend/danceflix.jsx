import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configreStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configreStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});

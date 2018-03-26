import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './helpers/store';
import React from 'react';

/* import history from './helpers/history'
import { Router, Route } from 'react-router-dom' */
import Application from './pages/Application';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
)

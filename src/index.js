import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { jwt, refreshAuthLogic } from './common/auth-helper';

createAuthRefreshInterceptor(Axios, refreshAuthLogic);
// axios.defaults.baseURL = 'https://birnesh-todo.herokuapp.com/';
if (jwt()) {
  Axios.defaults.headers.common['x-access-token'] = `${jwt()}`;
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

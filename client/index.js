import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.js';
import store, { history } from './store';
import AppProvider from './components/appProvider.js';

require('./styles/main.less');

render(
  <AppProvider/>,
  document.getElementById('root')
);

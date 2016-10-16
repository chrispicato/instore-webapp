import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.jsx';
import store, { history } from './store';
import AppProvider from './components/AppProvider.jsx';

render(
  <AppProvider/>,
  document.getElementById('root')
);

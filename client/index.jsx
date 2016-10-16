import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import AppProvider from './components/AppProvider.jsx';

render(
  <AppProvider/>,
  document.getElementById('root')
);

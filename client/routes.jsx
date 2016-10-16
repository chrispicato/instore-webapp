import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import App from './components/App.jsx';
import { useScroll } from 'react-router-scroll';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
      </Route>
    </Router>
    );
  }
}

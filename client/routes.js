import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from './components/app.js';
import Home from './components/Home/home.js';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
    );
  }
}

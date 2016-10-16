import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';

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

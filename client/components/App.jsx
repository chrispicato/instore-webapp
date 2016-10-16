import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Hello world</h1>
        <h1>How's it going</h1>
        <h1>Sup</h1>
        {this.props.children}
      </div>
    );
  }
}

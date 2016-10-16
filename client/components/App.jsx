import React, { Component } from 'react';
import { Link } from 'react-router';

// renders logo and maps props

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h1>How's it going</h1>
        <h1>Sup</h1>
        {this.props.children}
      </div>
    );
  }
}

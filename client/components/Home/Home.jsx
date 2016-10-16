import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello 2.0</h1>
        <img src={require('../../assets/background-1.jpg')} />
      </div>
    );
  }
}

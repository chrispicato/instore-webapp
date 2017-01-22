import React, { Component } from 'react';
import { Link } from 'react-router';
import Search from '../search.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>instore</h1>
        <img height="100%" width="100%" src={require('../../assets/background-1.jpg')} />
        <Search />
      </div>
    );
  }
}

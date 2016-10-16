import React, { Component } from 'react';
import { Link } from 'react-router';
import Search from '../Search.jsx';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Instore</h1>
        <img height="100%" width="100%" src={require('../../assets/background-1.jpg')} />
        <Search />
      </div>
    );
  }
}
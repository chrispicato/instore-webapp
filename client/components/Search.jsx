import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class SearchEvents extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   e.preventDefault()
  // }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search for events"/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

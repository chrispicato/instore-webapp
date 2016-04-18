import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    // Nothing needs to be mapped
  };
}

export class Header extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      
    );
  }
}

export default connect(mapStateToProps)(Header);
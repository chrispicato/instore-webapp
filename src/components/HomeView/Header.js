import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Header extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      <div className="home-header">
        <div className="header-item pull-left">
          <Link className="icon-button" to={'/'}>InStore</Link>
        </div>
        <div className="header-item pull-right">
          <Link className="log-in-button" to={'/'}>
            Log In
          </Link>
        </div>
        <div className="header-item pull-right">
          <Link className="connect-inventory-button" to={'/'}>
            Connect Your Inventory
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
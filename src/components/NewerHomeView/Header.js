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
      <div className="home-header">
        <div className="header-item pull-left">
          <div className="company-name-button">
            InStore
          </div>
        </div>
        <div className="header-item pull-right">
          <div className="log-in-button">
            Log In
          </div>
        </div>
        <div className="header-item pull-right">
          <div className="connect-inventory-button">
            Connect Your Inventory
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
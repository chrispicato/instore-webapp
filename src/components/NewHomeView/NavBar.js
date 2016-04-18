import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    // Nothing needs to be mapped
  };
}

export class NavBar extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top home-navbar">
        <div className="container navbar-content-container">
          <div className="navbar-header navbar-logo">
            <Link to="home" className="navbar-brand home-navbar-link"> InStore </Link>
          </div>
          <ul className="nav navbar-nav pull-right navbar-menu">
            <li><Link to="home" className="navbar-brand home-navbar-link"> Connect Your Inventory </Link></li>
            {
            /*
            <li><Link to="home" className="navbar-brand"> Help </Link></li>
            <li><Link to="home" className="navbar-brand"> Sign Up </Link></li>
            <li><Link to="home" className="navbar-brand"> Sign In </Link></li>
            */
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
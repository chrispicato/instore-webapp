import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Footer extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      <div className="home-footer">
        <div className="footer-links">
          <a href="/">Pricing</a>
          <a href="/">Blog</a>
          <a href="/">Integration</a>
        </div>
        <div className="footer-question">
          Questions? We'd love to hear from you! <a href="mailto:questions@findinstore.co">questions@findinstore.co</a>
        </div>
        <div className="footer-incorporated">
          © Instore
        </div>
      </div>
    );
  }
}

export default Footer;
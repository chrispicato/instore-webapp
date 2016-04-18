import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    // Nothing needs to be mapped
  };
}

export class Footer extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      <div className="home-footer">
        <div>
          Footer
        </div>
        <div>
          © Instore
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Footer);
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    // Nothing needs to be mapped
  };
}

export class About extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      <div className="home-about">
        <div className="about-header">
          <h1 className="about-title">About Instore</h1>
          <div className="about-subtitle">
            Wouldn’t you want to know if something you wanted was available
            and cheaper at a nearby store? InStore provides accurate and updated
            information about product availability and pricing at retail stores near you.
          </div>
        </div>
        <div className="about-content-container">
          <div className="about-content">
            <h2>Location</h2>
            <div className="about-content-text">
              Get the exact item you're looking for at a store near you
            </div>
          </div>
          <div className="about-content">
            <h2>Availability</h2>
            <div className="about-content-text">
              Avoid wasted trips by checking availability before you get there
            </div>
          </div>
          <div className="about-content">
            <h2>Pricing</h2>
            <div className="about-content-text">
              Get the best deal by comparing prices at stores in your area
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(About);
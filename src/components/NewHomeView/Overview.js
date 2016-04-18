import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    // Nothing needs to be mapped
  };
}

export class Overview extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>About InStore</h3>
            <p>
              Wouldn’t you want to know if something you wanted was available
              and cheaper at a nearby store? InStore provides accurate and updated
              information about product availability and pricing at retail stores near you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Product Availability</h3>
            <p>Avoid wasted trips by checking availability before you get there.</p>
          </div>
          <div className="col-md-4">
            <h3>Price Comparisons</h3>
            <p>Get the best deal by comparing prices at stores in your area.</p>
          </div>
          <div className="col-md-4">
            <h3>Live and Accurate</h3>
            <p>Our server is live so your search is guaranteed in real time.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>List your business!</h3>
            <p>Are you a retail store looking to get more exposure for your inventory?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Overview);
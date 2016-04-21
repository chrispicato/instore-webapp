import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from './Header';

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

export class ProductSearchResultView extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    const {
      search,
    } = this.props;
    return (
      <div className="product-search-result-view">

        Product Search Result!
        {search.keyword}
        {search.location}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductSearchResultView);
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
    search: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const {
      search,
    } = this.props;
    return (
      <div className="product-search-result-view">
        <div className="search-header">
        </div>
        Product Search Result!
        {search.keyword}
        {search.location}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductSearchResultView);
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
      <div>
        Product Search Result!
        {search.keyword}
        {search.location}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductSearchResultView);
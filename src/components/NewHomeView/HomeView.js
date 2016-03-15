import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import counterActions from '../../actions/counterActions';
import Header from './Header';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
function mapStateToProps(state) {
  return state;
}

export class HomeView extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
    } = this.props;

    return (
      <div id="main-wrapper">
        <Header />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);

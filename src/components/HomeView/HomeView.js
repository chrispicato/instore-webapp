import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import searchActions from '../../actions/searchActions';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';

// import BackgroundImage from './'
// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

export class HomeView extends React.Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    // Pre-flight checks, and then searches
    this.searchProduct = this.searchProduct.bind(this);
    // To detect change in search input
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    // To detect change in location input
    this.onChangeLocationInput = this.onChangeLocationInput.bind(this);
    // To detect when the user presses enter in the search input
    this.onKeyDownCheckForEnter = this.onKeyDownCheckForEnter.bind(this);
    // To detect when the search button is clicked
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
  }

  searchProduct() {
    const {
      search,
      dispatch,
    } = this.props;

    const {
      router,
    } = this.context;

    if (search.keyword !== '' && search.location !== '') {
      router.push({
        pathname: '/product-search-result', 
        query: {
          keyword: search.keyword,
          location: search.location,
        },
      });
    } else {
      console.log('Missing keyword or location');
    }
  }

  onChangeSearchInput(event) {
    const {
      dispatch,
    } = this.props;

    const keyword = event.target.value;
    dispatch(searchActions.setKeyword(keyword));
  }

  onChangeLocationInput(event, isFromAutocomplete) {
    const {
      dispatch,
    } = this.props;

    let location = '';

    if (isFromAutocomplete) {
      location = document.getElementById('location-input').value;
    } else {
      location = event.target.value;
    }

    dispatch(searchActions.setLocation(location));
  }

  onKeyDownCheckForEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.searchProduct();
    }
  }

  onClickSearchButton(event) {
    this.searchProduct();
  }

  render() {
    const {
      search,
    } = this.props;

    return (
      <div className="home-view">
        <Header />
        <Hero 
          keyword={ search.keyword }
          location={ search.location }
          onChangeSearchInput={this.onChangeSearchInput}
          onChangeLocationInput={this.onChangeLocationInput}
          onKeyDownCheckForEnter={this.onKeyDownCheckForEnter}
          onClickSearchButton={this.onClickSearchButton}
        />
        <About />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);

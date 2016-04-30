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

  constructor(props) {
    super(props);

    // To detect change in search input
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    // To detect change in location input
    this.onChangeLocationInput = this.onChangeLocationInput.bind(this);
    // To detect changed in the autocomplete
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    // To detect when the user presses enter in the search input
    this.onKeyDownSearchInput = this.onKeyDownSearchInput.bind(this);
    // To detect when the user presses enter in the location input
    this.onKeyDownLocationInput = this.onKeyDownLocationInput.bind(this);
    // To detect when the search button is clicked
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
  }

  componentDidMount() {
    // Sets up Google Autocomplete
    const locationInputElement = document.getElementById('location-input');
    const options = {
      types: ['(cities)'],
      componentRestrictions: {
        country: 'us',
      },
    };

    const autocomplete = new google.maps.places.Autocomplete(locationInputElement, options);
    google.maps.event.addListener(autocomplete, 'place_changed', this.handlePlaceChanged);
  }

  onChangeSearchInput(event) {
    const {
      dispatch,
    } = this.props;

    const keyword = event.target.value;
    dispatch(searchActions.setKeyword(keyword));
  }

  onChangeLocationInput(event) {
    const {
      dispatch,
    } = this.props;

    const location = event.target.value;
    dispatch(searchActions.setLocation(location));
  }

  handlePlaceChanged() {
    const {
      dispatch,
    } = this.props;

    const location = document.getElementById('location-input').value;

    dispatch(searchActions.setLocation(location));
    dispatch(searchActions.setChangingLocation(false));
  }

  onKeyDownSearchInput(event) {
    const {
      search,
      dispatch,
    } = this.props;

    if (event.keyCode === 13) {
      event.preventDefault();

      if (search.keyword !== '' && search.location !== '') {
        console.log('Enter key hit in search input');
        console.log('Keyword:', search.keyword);
        console.log('Location:', search.location);
        // dispatch(push(`/product-search-result?keyword=${search.keyword}&location=${search.location}`));
        dispatch(push(`/product-search-result`, {
          keyword: search.keyword,
          location: search.location,
        }));
      } else {
        console.log('Missing keyword or location');
      }
    }
  }

  onKeyDownLocationInput(event) {
    const {
      search,
      dispatch,
    } = this.props;

    
    if (event.keyCode === 13) {
      event.preventDefault();

      if (search.keyword !== '' && search.location !== '' && !search.changingLocation) {
        console.log('Enter key hit in location input');
        console.log('Keyword:', search.keyword);
        console.log('Location:', search.location);
        // dispatch(push(`/product-search-result?keyword=${search.keyword}&location=${search.location}`));
        dispatch(push(`/product-search-result`, {
          keyword: search.keyword,
          location: search.location,
        }));
      } else {
        console.log('Missing keyword or location');
      }
      
    } else {
      dispatch(searchActions.setChangingLocation(true));
    }
  }

  onClickSearchButton(event) {
    const {
      search,
      dispatch,
    } = this.props;

    event.preventDefault();

    if (search.keyword !== '' && search.location !== '') {
      console.log('Search button clicked');
      console.log('Keyword', search.keyword);
      console.log('Location', search.location);
      // dispatch(push(`/product-search-result?keyword=${search.keyword}&location=${search.location}`));
      dispatch(push(`/product-search-result`, {
          keyword: search.keyword,
          location: search.location,
        }));
    } else {
      console.log('Missing keyword or location');
    }
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
          onKeyDownLocationInput={this.onKeyDownLocationInput}
          onKeyDownSearchInput={this.onKeyDownSearchInput}
          onClickSearchButton={this.onClickSearchButton}
        />
        <About />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);

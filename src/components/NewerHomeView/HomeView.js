import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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

    this.state = {
      locationAutocompleteHidden: true,
    };

    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.onKeyDownSearchInput = this.onKeyDownSearchInput.bind(this);
    this.toggleLocationAutocompleteHidden = this.toggleLocationAutocompleteHidden.bind(this);
    // Do I need this?
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.onChangeLocationInput = this.onChangeLocationInput.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
  }

  componentDidMount() {
    // Sets up Google Autocomplete
    const locationInput = document.getElementById('location-input');
    const options = {
      types: ['(cities)'],
      componentRestrictions: {
        country: 'us',
      },
    };
    const autocomplete = new google.maps.places.Autocomplete(locationInput, options);
    // What's the point of this?
    // google.maps.event.addListener(autocomplete, 'place_changed', this.handlePlaceChanged);
  }

  onChangeSearchInput() {
    const {
      dispatch,
    } = this.props;

    const keyword = this.refs.searchInput.value;
    dispatch(searchActions.setKeyword(keyword));
  }

  onKeyDownSearchInput(event) {
    const {
      search,
      dispatch,
    } = this.props;

    if (event.keyCode === 13) {
      if (!this.state.locationAutocompleteHidden) {
        this.toggleLocationAutocompleteHidden();
      } else if (search.keyword !== '' && search.location !== '') {
        console.log('Going to product list page');
        // Transition to next page!
        // this.transitionTo('productSearchResults', {
        //   keyword: this.state.keyword.replace(/ /g, '+'),
        //   location: this.state.location.replace(/ /g, '+')
        // });
        // this.transitionTo('/search/query=' + this.state.keyword.replace(/ /g, '+') + '&location=' + this.state.location.replace(/ /g, '+'));
      } else {
        console.log('Missing keyword or location');
      }
    }
  }

  // Do I need this?
  handlePlaceChanged() {
    const {
      dispatch,
    } = this.props;

    if (!this.state.locationAutocompleteHidden) {
      this.toggleLocationAutocompleteHidden();
    }
    const location = this.refs.locationInput.value;
    dispatch(searchActions.setLocation(location));
  }

  onChangeLocationInput() {
    const {
      dispatch,
    } = this.props;

    if (this.state.locationAutocompleteHidden) {
      this.toggleLocationAutocompleteHidden();
    }
    const location = this.refs.locationInput.value;
    dispatch(searchActions.setLocation(location));
  }

  onClickSearchButton() {
    const {
      search,
      dispatch,
    } = this.props;

    if (search.keyword !== '' && search.location !== '') {
      console.log('Going to product list page');
      // this.transitionTo('productSearchResults', {
      //   keyword: this.state.keyword.replace(/ /g, '+'),
      //   location: this.state.location.replace(/ /g, '+'),
      // });
      // Transition to next page
      // this.transitionTo('/search/query=' + this.state.keyword.replace(/ /g, '+') + '&location=' + this.state.location.replace(/ /g, '+'));
    } else {
      console.log('Missing keyword or location');
    }
  }

  toggleLocationAutocompleteHidden() {
    this.setState({
      locationAutocompleteHidden: !this.state.locationAutocompleteHidden,
    });
  }

  render() {
    const {
      search,
    } = this.props;

    return (
      <div className="home-view">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);

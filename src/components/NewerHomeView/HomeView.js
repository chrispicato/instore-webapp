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

    // To detect change in search input
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    // To detect change in location input
    this.onChangeLocationInput = this.onChangeLocationInput.bind(this);
    // To detect changed in the autocomplete
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    // To detect when the user presses enter
    this.onKeyDownSearchInput = this.onKeyDownSearchInput.bind(this);
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
    // google.maps.event.addDomListener(autocomplete, 'keydown', function(e) { 
    //   if (e.keyCode == 13) { 
    //       e.preventDefault(); 
    //   }
    // }); 
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
  }

  onKeyDownSearchInput(event) {
    const {
      search,
      dispatch,
    } = this.props;

    if (event.keyCode === 13) {
      event.preventDefault();

      if (search.keyword !== '' && search.location !== '') {
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

  render() {
    const {
      search,
    } = this.props;

    return (
      <div className="home-view">
        <Header />
        <Hero 
          onChangeSearchInput={this.onChangeSearchInput}
          onChangeLocationInput={this.onChangeLocationInput}
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

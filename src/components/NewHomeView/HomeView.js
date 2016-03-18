import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import searchActions from '../../actions/searchActions';
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
      <div className="container-fluid content">
        <nav className="navbar navbar-default navbar-static-top home-navbar">
          <div className="container navbar-content-container">
            <div className="navbar-header navbar-logo">
              <Link to="home" className="navbar-brand navbar-abc"> InStore </Link>
            </div>
            <ul className="nav navbar-nav pull-right navbar-menu">
              <li><Link to="home" className="navbar-brand navbar-abc"> Connect Your Inventory </Link></li>
              {
              /*
              <li><Link to="home" className="navbar-brand"> Help </Link></li>
              <li><Link to="home" className="navbar-brand"> Sign Up </Link></li>
              <li><Link to="home" className="navbar-brand"> Sign In </Link></li>
              */
              }
            </ul>
          </div>
        </nav>
        <div className="jumbotron hero">
          <div className="container hero-caption">
            <h1>Welcome!</h1>
            <p>Search local OC vape shops for products you need now</p>
          </div>
          <div className="container search-container">
            <form>
              <div className="form-group form-group-lg col-md-6 input-container">
                <label className="control-label" htmlFor="search-input">Search</label>
                <input id="search-input" className="form-control" ref="searchInput" type="text"  placeholder="What are you looking for?" onChange={this.onChangeSearchInput} onKeyDown={this.onKeyDownSearchInput}></input>
              </div>
              <div className="form-group form-group-lg col-md-4 input-container">
                <label className="control-label" htmlFor="location-input">Location</label>
                <input id="location-input" className="form-control" ref="locationInput" type="text" placeholder="Enter location" onChange={this.onChangeLocationInput} onBlur={this.onChangeLocationInput} onKeyDown={this.onKeyDownSearchInput}></input>
              </div>
              <div className="form-group form-group-lg col-md-2 search-button-container">
                <input className="btn-block btn btn-lg btn-primary search-button" type="button" value="Search" onClick={this.onClickSearchButton}></input>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3>About InStore</h3>
            <p>
              Wouldn’t you want to know if something you wanted was available
              and cheaper at a nearby store? InStore provides accurate and updated
              information about product availability and pricing at retail stores near you.
            </p>
          </div>
          <div className="row">
            <h3>Product Availability</h3>
            <p>Avoid wasted trips by checking availability before you get there.</p>
            <h3>Price Comparisons</h3>
            <p>Get the best deal by comparing prices at stores in your area.</p>
            <h3>Live and Accurate</h3>
            <p>Our server is live so your search is guaranteed in real time.</p>
          </div>
          <div className="row">
            <h3>List your business!</h3>
            <p>Are you a retail store looking to get more exposure for your inventory?</p>
          </div>
          <div className="row">
            <p>This is the home page. This is not protected by the route.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);

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
            <ul className="nav navbar-nav pull-right navbar-menu" style={styles.navBarMenu}>
              <li><Link to="home" className="navbar-brand navbar-abc"> Connect Your Inventory </Link></li>
              {
              /*
              <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Help </Link></li>
              <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Sign Up </Link></li>
              <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Sign In </Link></li>
              */
              }
            </ul>
          </div>
        </nav>
        <div className="jumbotron" style={styles.hero}>
          <div className="container" style={styles.heroCaption}>
            <h1>Welcome!</h1>
            <p>Search local OC vape shops for products you need now</p>
          </div>
          <div className="container" style={styles.searchContainer}>
            <form>
              <div className="form-group form-group-lg col-md-6" style={styles.searchInputContainer}>
                <label className="control-label" htmlFor="search-input">Search</label>
                <input id="search-input" className="form-control" ref="searchInput" type="text"  placeholder="What are you looking for?" onChange={this.onChangeSearchInput} onKeyDown={this.onKeyDownSearchInput}></input>
              </div>
              <div className="form-group form-group-lg col-md-4" style={styles.locationInputContainer}>
                <label className="control-label" htmlFor="location-input">Location</label>
                <input id="location-input" className="form-control" ref="locationInput" type="text" placeholder="Enter location" onChange={this.onChangeLocationInput} onBlur={this.onChangeLocationInput} onKeyDown={this.onKeyDownSearchInput}></input>
              </div>
              <div className="form-group form-group-lg col-md-2" style={styles.searchButtonContainer}>
                <input className="btn-block btn btn-lg btn-primary" type="button" value="Search" onClick={this.onClickSearchButton} style={styles.searchButton}></input>
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

const styles = {
  content: {
    paddingLeft: 0,
    paddingRight: 0
  },
  navBar: {
    marginBottom: -60,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderBottom: 0,
    height: 60,
  },
  navBarContentContainer: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    height: '100%'
  },
  navBarLogo: {
    paddingTop: 5
  },
  navBarMenu: {
    paddingTop: 5
  },
  navBarLink: {
    color: 'white'
  },
  hero: {
    backgroundImage: 'url(\'http://jinqiaojs.com/hd/pretty-beach-hd-wallpaper-0zd.jpg\')',
    backgroundSize: 'cover',
    height: 600,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    paddingBottom: 0,
    paddingTop: '10%',
    position: 'relative'
  },
  heroCaption: {
    textAlign: 'center',
    color: 'white'
  },
  searchContainer: {
    background: 'rgba(15,81,133,0.3)',
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    paddingLeft: 150,
    paddingRight: 150,
    height: 150,
    paddingTop: 27,
    position: 'absolute',
    bottom: 0
  },
  searchInputContainer: {
    color: 'white',
    fontSize: 16
  },
  locationInputContainer: {
    color: 'white',
    fontSize: 16
  },
  searchButtonContainer: {
    marginTop: 26
  },
  searhcButton: {
  }
};

export default connect(mapStateToProps)(HomeView);

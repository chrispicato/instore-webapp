import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Hero extends React.Component {
  static propTypes = {
    // No prop types required
    keyword: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    onChangeSearchInput: PropTypes.func.isRequired,
    onChangeLocationInput: PropTypes.func.isRequired,
    onKeyDownCheckForEnter: PropTypes.func.isRequired,
    onClickSearchButton: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    // To detect changed in the autocomplete
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    // To detect if the dropdown is open when user presses enter
    this.onKeyDownLocationInput = this.onKeyDownLocationInput.bind(this);

    this.state = {
      changingLocation: false,
    };
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

  handlePlaceChanged() {
    const {
      onChangeLocationInput,
    } = this.props;

    onChangeLocationInput(undefined, true);

    this.setState({
      changingLocation: false,
    });
  }

  onKeyDownLocationInput(event) {
    const {
      onKeyDownCheckForEnter,
    } = this.props;

    if (event.keyCode === 13 && !this.state.changingLocation) {
      onKeyDownCheckForEnter(event);
    } else {
      this.setState({
        changingLocation: true,
      });
    }
  }

  render() {
    const {
      keyword,
      location,
      onChangeSearchInput,
      onChangeLocationInput,
      onKeyDownCheckForEnter,
      onClickSearchButton,
    } = this.props;

    return (
      <div className="home-hero">
        <div className="hero-background">

        </div>
        <div className="hero-content-container">
          <div className="hero-content">
            <div className="hero-content-text-container">
              <div className="hero-content-welcome">
                Welcome
              </div>
              <div className="hero-content-subtext">
                Search local shops for the product you need now
              </div>
            </div>
          </div>
          <div className="hero-footer">
            <div className="hero-searchbar">
              <form className="search-form">
                <input
                  className="search-item-input"
                  type="text"
                  placeholder="What are you looking to buy?"
                  value={ keyword }
                  onChange={ onChangeSearchInput }
                  onKeyDown={ onKeyDownCheckForEnter }
                />
                <input
                  id="location-input"
                  className="search-location-input"
                  type="text"
                  placeholder="Where are you at?"
                  value={ location }
                  onChange={ onChangeLocationInput }
                  onKeyDown={ this.onKeyDownLocationInput }
                />
                <input
                  className="search-button"
                  type="button"
                  value="Search"
                  onClick={ onClickSearchButton }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

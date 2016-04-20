import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Hero extends React.Component {
  static propTypes = {
    // No prop types required
  };

  render() {
    const {
      keyword,
      location,
      onChangeSearchInput,
      onChangeLocationInput,
      handlePlaceChanged,
      onKeyDownSearchInput,
      onKeyDownLocationInput,
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
                  onKeyDown={ onKeyDownSearchInput }
                />
                <input
                  id="location-input"
                  className="search-location-input"
                  type="text"
                  placeholder="Where are you at?"
                  value={ location }
                  onChange={ onChangeLocationInput }
                  onKeyDown={ onKeyDownLocationInput }
                />
                <button
                  className="search-button"
                  onClick={ onClickSearchButton }
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
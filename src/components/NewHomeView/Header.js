import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import counterActions from '../../actions/counterActions';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
function mapStateToProps(state) {
  return state;
}

export class Header extends React.Component {
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
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-7 hidden-xs">
                <ul className="contact-info custom-list list-inline">
                  <li><i className="fa fa-phone"></i><span>+1 (123) 456-7890</span></li>
                  <li><i className="fa fa-envelope"></i><span>example@example.com</span></li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 text-right pull-right">
                <div className="contact-right">
                  <ul className="social custom-list list-inline">
                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                  </ul>
                  <div className="header-login">
                    <button className="login-toggle header-btn"><i className="fa fa-power-off"></i> Login</button>
                    <div className="header-form">
                      <form action="index.html" className="default-form">
                        <p className="alert-message warning"><i className="ico fa fa-exclamation-circle"></i> All fields are required! <i className="fa fa-times close"></i></p>
                        <p className="form-row">
                          <input className="required email" type="text" placeholder="Email" />
                        </p>
                        <p className="form-row">
                          <input className="required" type="password" placeholder="Password" />
                        </p>
                        <p className="form-row">
                          <button className="submit-btn button btn-blue"><i className="fa fa-power-off"></i> Login</button>
                        </p>
                        <p className="form-row forgot-password">
                          <a href="#">Forgot Password?</a>
                        </p>
                        <p className="form-row register">
                          <a href="#">Register</a>
                        </p>
                      </form>
                    </div>
                  </div>
                  <div className="header-language">
                    <button className="header-btn"><i className="fa fa-globe"></i>EN</button>
                    <nav className="header-nav">
                      <ul className="custom-list">
                        <li className="active"><a href="#">EN</a></li>
                        <li><a href="#">DE</a></li>
                        <li><a href="#">FR</a></li>
                        <li><a href="#">IT</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-navi">
          <div className="container">
            <div className="row">
              <div className="col-md-12" id="bs-example-navbar-collapse-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="logo pull-left">
                      <a href="index.html"><img src="img/logo.png" alt="" /></a>
                    </div>
                    <ul className="nav navbar-nav main-nav pull-right">
                      <li className="active"><a href="index.html">Home</a></li>
                      <li className="has-submenu">
                        <a href="#">Rooms</a>
                        <ul className="sub-menu custom-list">
                          <li><a href="listing.html">Rooms List View</a></li>
                          <li><a href="listing2.html">Rooms Grid View</a>
                          </li>
                          <li className="has-submenu">
                            <a href="#">Luxury Apartments</a>
                            <ul className="sub-menu custom-list">
                              <li><a href="room4.html">Luxury Apartment 1</a></li>
                              <li><a href="room.html">Luxury Apartment 2</a></li>
                            </ul>
                          </li>
                          <li className="has-submenu">
                            <a href="#">Deluxe Suites</a>
                            <ul className="sub-menu custom-list">
                              <li><a href="room2.html">Deluxe Suite 1</a></li>
                              <li><a href="room3.html">Deluxe Suite 2</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="staff.html">Our Staff</a></li>
                      <li><a href="locations.html">Locations</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                      <li className="has-submenu">
                        <a href="news.html">News</a>
                        <ul className="sub-menu custom-list">
                          <li><a href="single_post.html">Single Post</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <i className="fa fa-bars toggleMenu"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps)(Header);

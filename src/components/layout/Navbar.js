import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import {
//   clearCurrentProfile,
//   getProfileInfo
// } from "../../actions/profileActions";
import NavbarMenu from "./NavbarMenu";

import NBALogo from "../../images/nba.png";
import NCAALogo from "../../images/ncaa_official_logo.png";
import withWidth from "@material-ui/core/withWidth";

import "./navbar.css";

// Material-UI Imports Below
import { Button, Grid } from "@material-ui/core";

class Navbar extends Component {
  constructor() {
    super();
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    // this.props.logoutUser();
  }

  componentWillMount() {
    if (localStorage.jwtToken) {
      this.props.getProfileInfo();
    }
  }

  render() {
    // Markup shown on the right hand side of Navbar when user is GUEST.
    const width = this.props.width;

    let guestMarkUp = (
      <Grid
        container
        spacing={0}
        justify="space-evenly"
        alignItems="center"
        direction="row"
        xs={4}
        sm={4}
        md={3}
        lg={3}
      >
        <Grid item>
          {/* <Link to="/register"> */}
          <Button class="navButtons buttonGrey" primary>
            Sign Up
          </Button>
          {/* </Link> */}
        </Grid>
        <Grid item>
          {/* <Link to="/login"> */}
          <Button class="navButtons buttonBlue" primary>
            Login
          </Button>
          {/* </Link> */}
        </Grid>
      </Grid>
    );

    // Markup shown on the right hand side of Navbar when user is LOGGED IN.
    let loggedInMarkup = (
      <Grid
        container
        spacing={0}
        justify="space-around"
        alignItems="center"
        xs={2}
        sm={2}
        md={3}
        lg={3}
      >
        <Grid className="adjustMenuBurger" item>
          <NavbarMenu
            onLogoutClick={this.onLogoutClick}
            // userEmail={this.props.auth.user.email}
          />
        </Grid>
      </Grid>
    );

    return (
      <div className="navbarContainer">
        <Grid
          container
          className="navbarContainer headerfont"
          spacing={0}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Link to="/">
              <Grid item>
                <img className="navbar-logo" src={NCAALogo} alt="Navbar Logo" />
              </Grid>
            </Link>

            <Grid item className="ProjectHome">
              Collegiate Basketball Program Database
            </Grid>

            <Grid item>
              <img className="navbar-logo" src={NBALogo} alt="Navbar Logo" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  landing: PropTypes.object.isRequired
};

let mapStateToProps = state => ({
  auth: state.auth,
  landing: state.landing,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  // { logoutUser, clearCurrentProfile, getProfileInfo }
  {}
)(withWidth()(Navbar));

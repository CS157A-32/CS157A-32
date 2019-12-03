import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NBALogo from "../../images/nba.png";
import NCAALogo from "../../images/ncaa_official_logo.png";
import withWidth from "@material-ui/core/withWidth";

import "./navbar.css";

// Material-UI Imports Below
import { Button, Grid } from "@material-ui/core";

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    // Markup shown on the right hand side of Navbar when user is GUEST.

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

export default connect(mapStateToProps, {})(withWidth()(Navbar));

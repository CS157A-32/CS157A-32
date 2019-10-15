import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { readyLanding, setLandingStatus } from "../../actions/landingActions";
import SearchWidget from "./search_widget/SearchWidget";

import LandingImage from "../../images/landing_image2.jpg";


// Animation CSS imports
import "./Landing.css";

// Material-UI Imports
import {
  Grid,
  Typography,
  withStyles,
  withWidth
} from "@material-ui/core";

// Component CSS
let styles = {
  searchWidgetBox: {
    alignSelf: "center",
    background: "rgba(0,0,0,0.5)",
    padding: 20,
    width: "100%"
  }
};

class Landing extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    // during logged in , if we change url to landing/home it will redirect to homepage
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/");
    // }
    // this.props.setLandingStatus(true);
    // this.props.readyLanding();
  };

  componentWillUnmount = () => {
    // this.props.setLandingStatus(false);
  };

  render() {
      let { classes, landing, width } = this.props;

      // Generates markup for the inspiration picture
      let genBackgroundImgStyle = () => {
        return {
          display: "block",
          backgroundImage: `url(${LandingImage})`,
          backgroundSize: "cover",
          maxWidth: "100%",
          minHeight: 800,
        };
      };

      return (
        <div>
          <div style={genBackgroundImgStyle()} boxShadow={3}>
          .
            {/* <div className={`${classes.searchWidgetBox} fadeIn`}> */}
            <div >
              <SearchWidget />
            </div>
          </div>
        </div>
      );
    
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  landing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  landing: state.landing
});

export default connect(
  mapStateToProps,
  // { readyLanding, setLandingStatus }
  {  }
)(withStyles(styles)(withWidth()(Landing)));

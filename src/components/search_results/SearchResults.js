import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Card,
  Button,

  withStyles,
  withWidth
} from "@material-ui/core";
import { isWidthDown } from "@material-ui/core/withWidth";

import SearchResultBackGround from "../../images/court_background.jpg";


// Component CSS
let styles = {
  pad25: { 
    padding: 25, 
    width: "50%",
    opacity: 0.9,
  },
  pad252: { 
    opacity: 1

  }
};



class SearchResults extends Component {
  state = {
    schools: []
  };

  componentDidMount() {
    fetch("/api/schools")
      .then(res => res.json())
      .then(resultSchools =>
        this.setState({ schools: resultSchools }, () =>
          console.log("Schools found...", resultSchools)
        )
      );
  }

  render() {

    let genBackgroundImgStyle = () => {
      return {
        display: "block",
        backgroundImage: `url(${SearchResultBackGround})`,
        backgroundSize: "cover",
        // maxWidth: "100%",
        minHeight: 700,
      };
    };
    let { classes, width } = this.props;

    let schools2;

    schools2 = this.state.schools.map(school => {
      return (
        <Grid 
          container 
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <br/>
          <Card className={classes.pad25} square="false">
            <Grid
              container
              direction="flow"
              justify="flex-start"
              spacing={8}
              className={classes.pad252}
            >
              <Grid item xs={12} md>
                <Grid container direction="column" spacing={0}>
                  <Grid item>
                    <Typography variant="h5" color="black">
                      {school.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" color="primary">
                      {school.city}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" color="primary">
                      {school.conference}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  alignItems="center"
                >
  
                  <Grid item >
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={this.handleClickToHotel(hotel)}
                    >
                      See more details
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>

        </Grid>
        
      );
    });

    return (
      <div style={genBackgroundImgStyle()} boxShadow={3}>
          {schools2}
      </div>
    );
  }
}

SearchResults.propTypes = {
  auth: PropTypes.object.isRequired,
  landing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  landing: state.landing
});

export default connect(
  mapStateToProps,
  // { getIndividualSchoolResult }
  {  }
)(withStyles(styles)(withWidth()(SearchResults)));

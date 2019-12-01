import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Card, Button, withStyles, withWidth } from "@material-ui/core";
import { getIndividualSchoolResult } from "../../actions/searchResultActions";
import { clearData } from "../../actions/searchResultActions";

import {
  ArrowDownward,
  ArrowUpward,
  Sort,
  FilterList
} from "@material-ui/icons";

import SearchResultBackGround from "../../images/court_background.jpg";
import "./searchResult.css";

// Component CSS
let styles = {
  pad25: {
    padding: 25,
    width: "50%",
    opacity: 0.89
  },
  pad30: {
    width: "100%",
    opacity: 0.89
  },
  pad252: {
    opacity: 1
  },
  optionsBox: {
    padding: 8
  },

  button: {
    color: "#808080",
    fontSize: 16
  },
  arrowIcons: {
    marginBottom: 3,
    marginLeft: 3
  }
};

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      schools: [],
      sortOrder: 0,
      filter: null,
      schoolLogo: "http://content.sportslogos.net/logos/34/828/full/2616.png"
    };

    this.handleDescending = this.handleDescending.bind(this);
    this.handleAscending = this.handleAscending.bind(this);
    this.handleClickToSchool = this.handleClickToSchool.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    fetch("/api/schools")
      .then(res => res.json())
      .then(resultSchools =>
        this.setState({ schools: resultSchools }, () =>
          console.log("Schools found...", resultSchools)
        )
      );
  }

  componentWillUnmount() {
    // this.props.clearData();
  }

  // Handles 'Navigate to Individual School'
  handleClickToSchool = school => event => {
    event.preventDefault();
    this.props.getIndividualSchoolResult({
      schoolName: "San Jose State University", //school.SchoolName,
      schoolConference: "Mountain West" //school.conf
    });
    this.props.history.push("/indivSchool");
  };

  handleFilter = conf => event => {
    event.preventDefault();

    if (conf === "all")
      this.setState({
        filter: null
      });
    else
      this.setState({
        filter: conf
      });
  };

  handleDescending() {
    this.setState({
      sortOrder: 2
    });
  }

  handleAscending() {
    this.setState({
      sortOrder: 1
    });
  }

  render() {
    let genBackgroundImgStyle = () => {
      return {
        display: "block",
        backgroundImage: `url(${SearchResultBackGround})`,
        backgroundSize: "cover",
        minHeight: 700
      };
    };
    let { classes } = this.props;

    let schoolsList;

    if (this.state.sortOrder === 1) {
      this.state.schools.sort(function(a, b) {
        var x = a.SchoolName < b.SchoolName ? -1 : 1;
        return x;
      });
    } else if (this.state.sortOrder === 2) {
      this.state.schools.sort(function(a, b) {
        var x = a.SchoolName < b.SchoolName ? 1 : -1;
        return x;
      });
    }

    let conferences;
    var conferenceList = null;

    conferenceList = this.state.schools.map(school => {
      return school.conf;
    });

    let uniqueConferenceList = [...new Set(conferenceList)];

    conferences = uniqueConferenceList.map(conf => {
      return (
        <Grid item class="extraBoxOptions">
          <Button className={classes.button} onClick={this.handleFilter(conf)}>
            {conf}
          </Button>
        </Grid>
      );
    });

    schoolsList = this.state.schools.map(school => {
      if (this.state.filter == null || school.conf == this.state.filter)
        return (
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <br />
            <Card className={classes.pad25} square="false">
              <Grid
                container
                direction="row"
                justify="flex-start"
                spacing={8}
                className={classes.pad252}
              >
                <Grid item md={3}>
                  <img
                    className="school-logo"
                    src={this.state.schoolLogo}
                    alt="Navbar Logo"
                  />
                </Grid>
                <Grid container md={6} direction="column">
                  <Grid item class="searchResultSchoolName">
                    {school.SchoolName}
                  </Grid>
                  <Grid item class="searchResultSchoolConference">
                    {school.conf}
                  </Grid>
                </Grid>
                <Grid item md={3} class="moreInfoButton">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickToSchool(school)}
                  >
                    More details
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        );
    });

    return (
      <div style={genBackgroundImgStyle()} boxShadow={3}>
        <br></br>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={0}
          className={classes.pad252}
        >
          <Grid item md={3} className={classes.optionsBox}>
            <Card className={classes.pad30} square="false">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item class="extraBoxTitle">
                  <FilterList />
                  {"  Filter Conferences"}
                </Grid>
                {conferences}
                <Grid item class="extraBoxOptions">
                  <Button
                    className={classes.button}
                    onClick={this.handleFilter("all")}
                  >
                    Show All
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item md={3} className={classes.optionsBox}>
            <Card className={classes.pad30} square="false">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item class="extraBoxTitle">
                  <Sort />
                  {"  Sort Name"}
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    onClick={this.handleAscending}
                  >
                    Ascending
                    <ArrowUpward className={classes.arrowIcons}></ArrowUpward>
                  </Button>
                </Grid>
                <Grid item class="extraBoxOptions">
                  <Button
                    className={classes.button}
                    onClick={this.handleDescending}
                  >
                    Descending
                    <ArrowDownward
                      className={classes.arrowIcons}
                    ></ArrowDownward>
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        {schoolsList}
        <br></br>
      </div>
    );
  }
}

SearchResults.propTypes = {
  auth: PropTypes.object.isRequired,
  landing: PropTypes.object.isRequired,
  getIndividualSchoolResult: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  landing: state.landing
});

export default connect(
  mapStateToProps,
  { getIndividualSchoolResult, clearData }
)(withStyles(styles)(withWidth()(SearchResults)));

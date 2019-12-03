// #1
// importing everything we need

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Card, Button, withStyles, withWidth } from "@material-ui/core";
import { getIndividualSchoolResult } from "../../actions/searchResultActions";
import { clearData } from "../../actions/searchResultActions";
import ReactStars from "react-stars";
import {
  ArrowDownward,
  ArrowUpward,
  Sort,
  FilterList
} from "@material-ui/icons";
import SearchResultBackGround from "../../images/court_background.jpg";
import "./searchResult.css";

// #2
// Component CSS, used to style components
let styles = {
  pad25: {
    padding: 25,
    width: "50%",
    opacity: 0.82,
    backgroundColor: "#353535",
    color: "white"
  },
  pad30: {
    width: "100%",
    opacity: 0.87,
    backgroundColor: "#353535"
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

    // #3
    // variables for sorting and filter
    this.state = {
      sortOrder: 0,
      filter: null
    };

    // #4
    // helper functions, further explained below
    this.handleDescending = this.handleDescending.bind(this);
    this.handleAscending = this.handleAscending.bind(this);
    this.handleClickToSchool = this.handleClickToSchool.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  // #5
  // clearing old data
  componentWillUnmount() {
    this.props.clearData();
  }

  // #6
  // send school information to backend + navigate to indivSchool page
  handleClickToSchool = school => event => {
    event.preventDefault();
    this.props.getIndividualSchoolResult({
      schoolName: school.SchoolName,
      schoolConference: school.conf
    });
    this.props.history.push("/indivSchool");
  };

  // #7
  // setting the filter variable
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

  // #8
  // setting the sort variable
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
    if (this.props.query.schoolQuery[0] === null) {
      this.props.history.push("/");
      return null;
    } else {
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
      let conferences;

      // #9
      // based on the sort variable, we sort schools
      if (this.state.sortOrder === 1) {
        this.props.query.schoolQuery.sort(function(a, b) {
          let x = a.SchoolName < b.SchoolName ? -1 : 1;
          return x;
        });
      } else if (this.state.sortOrder === 2) {
        this.props.query.schoolQuery.sort(function(a, b) {
          let x = a.SchoolName < b.SchoolName ? 1 : -1;
          return x;
        });
      }

      let conferenceList = null;
      conferenceList = this.props.query.schoolQuery.map(school => {
        return school.conf;
      });
      let uniqueConferenceList = [...new Set(conferenceList)];

      // #10
      // create the conference component used for filtering
      conferences = uniqueConferenceList.map(conf => {
        return (
          <Grid item class="extraBoxOptions">
            <Button
              className={classes.button}
              onClick={this.handleFilter(conf)}
            >
              {conf}
            </Button>
          </Grid>
        );
      });

      // #11
      // create all the school components (incl. logo, name, conference, star, more detail button)
      schoolsList = this.props.query.schoolQuery.map(school => {
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
                      src={school.logo}
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
                  <Grid
                    container
                    md={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid item class="moreInfoButton">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleClickToSchool(school)}
                      >
                        More details
                      </Button>
                    </Grid>{" "}
                    {school.attendance > 40000 || school.tuition < 5000 ? (
                      <ReactStars
                        className="stars"
                        count={1}
                        value={1}
                        size={36}
                        edit={false}
                        color2={"#FFD700"}
                        color1={"#dcdcdc"}
                      />
                    ) : null}
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

            {/* // #12
         // create the sorting component, ascending/descending
         // calls to handleAscending and handleDescending  */}
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

          {/* // #13
         // insert the school list */}
          {schoolsList}
          <br></br>
        </div>
      );
    }
  }
}

SearchResults.propTypes = {
  auth: PropTypes.object.isRequired,
  getIndividualSchoolResult: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  query: state.query
});

export default connect(mapStateToProps, {
  getIndividualSchoolResult,
  clearData
})(withStyles(styles)(withWidth()(SearchResults)));

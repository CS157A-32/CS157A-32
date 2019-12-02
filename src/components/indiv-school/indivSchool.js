import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
// import { saveRecord } from "../../actions/adminActions";
import Button from "@material-ui/core/Button";
import { Grid, CircularProgress } from "@material-ui/core";
import {
  getSchoolRecord,
  getSchoolChampionships,
  getSchoolNBA
} from "../../actions/individualSchoolActions";

import "./indivSchool.css";

class IndivSchool extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {};
    this.saveSchoolInfo = this.saveSchoolInfo.bind(this);
    this.handleClickNBA = this.handleClickNBA.bind(this);
    this.handleClickRecord = this.handleClickRecord.bind(this);
    this.handleClickChampionship = this.handleClickChampionship.bind(this);
  }

  saveSchoolInfo(d1, d2) {
    let tempSchoolInfo = {
      name: "school"
    };
    // this.props.saveRecord(tempSchoolInfo);
  }

  // Handles 'Navigate to More Records info
  handleClickRecord = school => event => {
    event.preventDefault();
    this.props.getSchoolRecord({
      school: school.SchoolName,
      conference: school.conf
    });
    this.props.history.push("/indivSchoolRecord");
  };

  // Handles 'Navigate to More NBA info about School
  handleClickNBA = school => event => {
    event.preventDefault();
    this.props.getSchoolNBA({
      school: school.SchoolName
    });
    this.props.history.push("/indivSchoolNBA");
  };

  // Handles 'Navigate to More Championships info
  handleClickChampionship = school => event => {
    event.preventDefault();
    this.props.getSchoolChampionships({
      school: school.SchoolName
    });
    this.props.history.push("/indivSchoolChamp");
  };

  render() {
    if (this.props.schoolData.individualSchoolData.SchoolName === null) {
      this.props.history.push("/");
      return null;
    } else {
      const { individualSchoolData } = this.props.schoolData;
      let iconA = {
        url: individualSchoolData.logo,
        size: new this.props.google.maps.Size(100, 100),
        scaledSize: new this.props.google.maps.Size(40, 40),
        origin: new this.props.google.maps.Point(0, 0),
        anchor: new this.props.google.maps.Point(0, 32)
      };

      let displayGoogleMaps = (
        <div style={{ zIndex: -1 }}>
          <Map
            google={this.props.google}
            zoom={10}
            initialCenter={{
              lat: individualSchoolData.latitude,
              lng: individualSchoolData.longitude
            }}
            style={{
              maxWidth: "32%",
              height: "70%",
              marginTop: "1%"
            }}
          >
            <Marker
              icon={iconA}
              onClick={this.onMarkerClick}
              name={"Current location"}
              position={{
                lat: individualSchoolData.latitude,
                lng: individualSchoolData.longitude
              }}
            />
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{individualSchoolData.SchoolName}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      );

      return (
        <div class="wholePage" style={{ minHeight: window.innerHeight - 180 }}>
          {individualSchoolData.SchoolName == null ? (
            <div>
              <Grid item>
                <CircularProgress />
              </Grid>
            </div>
          ) : (
            <div id="whole page">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid
                  container
                  md={8}
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid container md={3}>
                      <img
                        className="indiv-logo"
                        src={individualSchoolData.logo}
                        alt="Navbar Logo"
                      />
                    </Grid>
                    <Grid
                      container
                      md={9}
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item class="schoolName">
                        {individualSchoolData.SchoolName}
                      </Grid>
                      <Grid item class="schoolConference">
                        {individualSchoolData.conf}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="flex-start">
                    <Grid
                      container
                      md={4}
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item class="title">
                        University
                      </Grid>
                      <Grid item class="infotext">
                        Attendance:{" "}
                        {individualSchoolData.attendance.toLocaleString("en", {
                          useGrouping: true
                        })}
                      </Grid>
                      <Grid item class="infotext">
                        Tuition: $
                        {individualSchoolData.tuition.toLocaleString("en", {
                          useGrouping: true
                        })}
                      </Grid>
                      <Grid item class="infotext">
                        Mascot: {individualSchoolData.mascot}
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      md={4}
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item class="title">
                        Stadium
                      </Grid>
                      <Grid item class="infotext">
                        {individualSchoolData.StadiumName}
                      </Grid>
                      <Grid item class="infotext">
                        {individualSchoolData.onOffCampus ? "On " : "Off "}
                        Campus
                      </Grid>
                      <Grid item class="infotext">
                        Capacity:{" "}
                        {individualSchoolData.capacity.toLocaleString("en", {
                          useGrouping: true
                        })}
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      md={4}
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item class="title">
                        Coach
                      </Grid>
                      <Grid item class="infotext">
                        {individualSchoolData.Name}
                      </Grid>
                      <Grid item class="infotext">
                        Titles Won: {individualSchoolData.Titles}
                      </Grid>
                      <Grid item class="infotext">
                        Win Percentage:{" "}
                        {(individualSchoolData.WLP * 100).toFixed(1)} %
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item className="schoolImageContainer">
                      <img
                        className="indiv-image"
                        src={individualSchoolData.image}
                        alt="Navbar Logo"
                      />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="flex-start"
                    >
                      <Grid item className="infotext">
                        Championships: {individualSchoolData.Championships}{" "}
                        <br></br>{" "}
                        {individualSchoolData.Championships +
                          individualSchoolData.RunnerUp >
                        0 ? (
                          <Button
                            className="buttonSearch"
                            primary
                            onClick={this.handleClickChampionship(
                              individualSchoolData
                            )}
                          >
                            more info
                          </Button>
                        ) : null}
                      </Grid>{" "}
                      <Grid item className="infotext">
                        18/19 Record: {individualSchoolData.wins}-
                        {individualSchoolData.losses}
                        <br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          onClick={this.handleClickRecord(individualSchoolData)}
                        >
                          more info
                        </Button>
                      </Grid>{" "}
                      <Grid item className="infotext">
                        Players in the NBA: {individualSchoolData.NBAplayers}
                        <br></br>{" "}
                        {individualSchoolData.NBAplayers > 0 ? (
                          <Button
                            className="buttonSearch"
                            primary
                            onClick={this.handleClickNBA(individualSchoolData)}
                          >
                            more info
                          </Button>
                        ) : null}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  md={4}
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                  className="townContainer"
                >
                  <Grid item class="title">
                    {individualSchoolData.name},{" "}
                    {individualSchoolData.state_name}
                  </Grid>
                  <Grid item class="infotext">
                    Population:{" "}
                    {individualSchoolData.population.toLocaleString("en", {
                      useGrouping: true
                    })}
                  </Grid>
                  <Grid item className="mapsContainer">
                    {displayGoogleMaps}
                  </Grid>
                </Grid>
              </Grid>
              <br></br>
              <br></br>
              <br></br>
            </div>
          )}
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  schoolData: state.schoolData,
  query: state.query
});
export default connect(
  mapStateToProps,
  // { saveRecord }
  { getSchoolRecord, getSchoolChampionships, getSchoolNBA }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyBjtRUvjcEnZpsmS4xtRF1f5HZ1RRV8qWI"
  })(IndivSchool)
);

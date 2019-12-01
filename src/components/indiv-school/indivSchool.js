import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
// import { saveRecord } from "../../actions/adminActions";
import Button from "@material-ui/core/Button";
import { Grid, CircularProgress } from "@material-ui/core";

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
    // this.props.getIndividualSchool({
    //   schoolName: school.SchoolName,
    //   schoolConference: school.conf
    // });
    this.props.history.push("/indivSchoolRecord");
  };

  // Handles 'Navigate to More NBA info about School
  handleClickNBA = school => event => {
    event.preventDefault();
    // this.props.getIndividualSchool({
    //   schoolName: school.SchoolName,
    //   schoolConference: school.conf
    // });
    this.props.history.push("/indivSchoolNBA");
  };

  // Handles 'Navigate to More Championships info
  handleClickChampionship = school => event => {
    event.preventDefault();
    // this.props.getIndividualSchool({
    //   schoolName: school.SchoolName,
    //   schoolConference: school.conf
    // });
    this.props.history.push("/indivSchoolChamp");
  };

  render() {
    if (this.props.individualSchoolData.schoolName === null) {
      this.props.history.push("/");
      return null;
    } else {
      const { individualSchoolData } = this.props.individualSchoolData;
      let iconA = {
        url: individualSchoolData.logoImage,
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
              height: "100%",
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
                <h1>{individualSchoolData.schoolName}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      );

      return (
        <div class="wholePage" style={{ minHeight: window.innerHeight - 180 }}>
          {individualSchoolData.schoolName == null ? (
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
                        src={individualSchoolData.logoImage}
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
                        {individualSchoolData.schoolName}
                      </Grid>
                      <Grid item class="schoolConference">
                        {individualSchoolData.schoolConference}
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
                        {individualSchoolData.schoolAttendance.toLocaleString(
                          "en",
                          {
                            useGrouping: true
                          }
                        )}
                      </Grid>
                      <Grid item class="infotext">
                        Tuition: $
                        {individualSchoolData.schoolTuition.toLocaleString(
                          "en",
                          {
                            useGrouping: true
                          }
                        )}
                      </Grid>
                      <Grid item class="infotext">
                        Mascot: {individualSchoolData.schoolMascot}
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
                        {individualSchoolData.stadiumName}
                      </Grid>
                      <Grid item class="infotext">
                        {individualSchoolData.stadiumOnOffCampus
                          ? "On "
                          : "Off "}
                        Campus
                      </Grid>
                      <Grid item class="infotext">
                        Capacity:{" "}
                        {individualSchoolData.stadiumCapacity.toLocaleString(
                          "en",
                          {
                            useGrouping: true
                          }
                        )}
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
                        {individualSchoolData.headCoach}
                      </Grid>
                      <Grid item class="infotext">
                        Titles Won: {individualSchoolData.headCoachTitles}
                      </Grid>
                      <Grid item class="infotext">
                        Win Percentage:{" "}
                        {individualSchoolData.headCoachWinPercentage}
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
                        src={individualSchoolData.schoolImage}
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
                        Championships:{" "}
                        {individualSchoolData.numberOfChampionships} <br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          onClick={this.handleClickChampionship(
                            individualSchoolData.school
                          )}
                        >
                          more info
                        </Button>
                      </Grid>{" "}
                      <Grid item className="infotext">
                        18/19 Record: {individualSchoolData.lastYearRecord}
                        <br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          onClick={this.handleClickRecord(
                            individualSchoolData.school
                          )}
                        >
                          more info
                        </Button>
                      </Grid>{" "}
                      <Grid item className="infotext">
                        NBA Drafted Players: {individualSchoolData.nbaDrafted}
                        <br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          onClick={this.handleClickNBA(
                            individualSchoolData.school
                          )}
                        >
                          more info
                        </Button>
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
                    {individualSchoolData.cityName},{" "}
                    {individualSchoolData.state}
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
  individualSchoolData: state.individualSchoolData,
  query: state.query
});
export default connect(
  mapStateToProps,
  // { saveRecord }
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyBjtRUvjcEnZpsmS4xtRF1f5HZ1RRV8qWI"
  })(IndivSchool)
);

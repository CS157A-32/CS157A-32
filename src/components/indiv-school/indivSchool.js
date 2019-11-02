import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import ReactStars from "react-stars";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { saveBooking } from "../../actions/bookingActions";
import Button from "@material-ui/core/Button";
import { Grid, CircularProgress } from "@material-ui/core";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Divider
} from "@material-ui/core";
import { Search, ExpandMore } from "@material-ui/icons";

import "./indivSchool.css";
import { blue } from "@material-ui/core/colors";

class IndivSchool extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    fetch("/api/indivSchool")
      .then(res => res.json())
      .then(resultSchools =>
        this.setState({ school: resultSchools }, () =>
          console.log("Schools found...", resultSchools)
        )
      );
  }

  constructor() {
    super();
    this.state = {
      schoolName: "San Jose State University",
      schoolConference: "Mountain West",
      schoolAttendance: 31000,
      schoolTuition: 10000,
      schoolMascot: "Spartans",
      cityName: "San Jose",
      state: "California",
      population: 1240000,
      latitude: 37.3021,
      longitude: -121.8489,
      stadiumName: "CEFCU Stadium",
      stadiumCapacity: 24000,
      stadiumOnOffCampus: 0,
      headCoach: "Mr. Bean",
      headCoachTitles: 3,
      headCoachWinPercentage: 0.4,
      logoImage: "http://content.sportslogos.net/logos/34/828/full/2616.png",
      schoolImage:
        "https://sjsuspartans.com/images/2019/9/10/GLH23677.JPG?width=1416&height=797&mode=crop&quality=80"
    };
    this.saveBookingInfo = this.saveBookingInfo.bind(this);
  }

  saveBookingInfo(roomTypeSelected, price) {
    // tempBookingInfo will be sent to saveBooking, which provides data to Payment page
    let tempBookingInfo = {
      name: "school", //this.props.individualHotelData.individualHotelData.name,
      address: "address", //this.props.individualHotelData.individualHotelData.address,
      roomType: roomTypeSelected,
      checkIn: "checkin", //this.props.query.searchQuery.checkIn,
      checkOut: "checkout", //this.props.query.searchQuery.checkOut,
      numRooms: "roomnum", //this.props.query.searchQuery.numberRooms,
      pricePerNight: price,
      hotelImage: "roomnum" //this.props.individualHotelData.individualHotelData.img[0],
    };
    // this.props.saveBooking(tempBookingInfo);
  }

  render() {
    if (
      this.state.schoolName == null
      // this.props.individualHotelData.individualHotelData === null ||
      // this.props.query.searchQuery === null
    ) {
      this.props.history.push("/");
      return null;
    } else {
      // const { individualHotelData } = this.props.individualHotelData;
      let iconA = {
        url: this.state.logoImage,
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
              lat: this.state.latitude,
              lng: this.state.longitude
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
                lat: this.state.latitude,
                lng: this.state.longitude
              }}
            />
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.schoolName}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      );

      return (
        <div class="wholePage" style={{ minHeight: window.innerHeight - 180 }}>
          {this.state.schoolName == null ? (
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
                        src={this.state.logoImage}
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
                        {this.state.schoolName}
                      </Grid>
                      <Grid item class="schoolConference">
                        {this.state.schoolConference}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    // justify="space-around"
                    alignItems="flex-start"
                  >
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
                        {this.state.schoolAttendance.toLocaleString("en", {
                          useGrouping: true
                        })}
                      </Grid>
                      <Grid item class="infotext">
                        Tuition: $
                        {this.state.schoolTuition.toLocaleString("en", {
                          useGrouping: true
                        })}
                      </Grid>
                      <Grid item class="infotext">
                        Mascot: {this.state.schoolMascot}
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
                        {this.state.stadiumName}
                      </Grid>
                      <Grid item class="infotext">
                        {this.state.stadiumOnOffCampus ? "On " : "Off "}
                        Campus
                      </Grid>
                      <Grid item class="infotext">
                        Capacity:{" "}
                        {this.state.stadiumCapacity.toLocaleString("en", {
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
                        {this.state.headCoach}
                      </Grid>
                      <Grid item class="infotext">
                        Titles Won: {this.state.headCoachTitles}
                      </Grid>
                      <Grid item class="infotext">
                        Win Percentage: {this.state.headCoachWinPercentage}
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
                        src={this.state.schoolImage}
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
                        Championships: 5 <br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          // onClick={this.handleClickChooseDeal(
                          //   deal.HotelName,
                          //   deal.Image
                          // )}
                        >
                          more info
                        </Button>
                      </Grid>{" "}
                      <Grid item className="infotext">
                        18/19 Record: 23-4-45<br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          // onClick={this.handleClickChooseDeal(
                          //   deal.HotelName,
                          //   deal.Image
                          // )}
                        >
                          more info
                        </Button>
                      </Grid>{" "}
                      <Grid item className="infotext">
                        NBA Drafted Players: 2<br></br>{" "}
                        <Button
                          className="buttonSearch"
                          primary
                          // onClick={this.handleClickChooseDeal(
                          //   deal.HotelName,
                          //   deal.Image
                          // )}
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
                    {this.state.cityName}, {this.state.state}
                  </Grid>
                  {/* <Grid item>{this.state.state}</Grid> */}
                  <Grid item class="infotext">
                    Population:{" "}
                    {this.state.population.toLocaleString("en", {
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
  individualHotelData: state.individualHotelData,
  query: state.query
});
export default connect(
  mapStateToProps,
  // { saveBooking }
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyBjtRUvjcEnZpsmS4xtRF1f5HZ1RRV8qWI"
  })(IndivSchool)
);

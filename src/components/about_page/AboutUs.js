import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./aboutUs.css";
import Sandro from "./Images/Sandro.png";
import Chris from "./Images/Chris.png";
import Lance from "./Images/Lance.png";


export default (class aboutUs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Grid container id="TeamContainer">
          <Grid id="AboutContainerTitle" item xs={12} lg={12}>
            Our Team
          </Grid>

          <Grid container spacing={0} direction="row" alignItems="baseline">
            <Grid
              container
              spacing={0}
              direction="row"
              justify="space-evenly"
              alignItems="baseline"
            >
              <Grid item >
                <a
                  className="teamMemberContainer"
                  id="AboutPageNames"
                  target="_blank"
                  href="https://www.linkedin.com/in/crdouglas94/"
                >
                  <img className="aboutPage-images" src={Chris} alt="" />
                  <br /> <div>Chris Douglas</div>{" "}
                </a>
                <div id="AboutPageRoles">Team Lead</div>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={0} direction="row" alignItems="baseline">
            <Grid
              container
              spacing={0}
              direction="row"
              justify="space-evenly"
              alignItems="baseline"
            >
              <Grid item >
                <a
                  className="teamMemberContainer"
                  id="AboutPageNames"
                  target="_blank"
                  href="https://www.linkedin.com/in/ssallenbach/"
                >
                  <img className="aboutPage-images" src={Sandro} alt="" />
                  <br /> <div>Sandro Sallenbach</div>
                </a>
                <div id="AboutPageRoles">Team Member</div>
              </Grid>
              <Grid item >
                <a
                  className="teamMemberContainer"
                  id="AboutPageNames"
                  target="_blank"
                  href="https://www.linkedin.com/in/lance-ngo-a1892a5/"
                >
                  <img className="aboutPage-images" src={Lance} alt="" />
                  <br /> <div>Lance Ngo</div>{" "}
                </a>
                <div id="AboutPageRoles">Team Member</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
});

const mapStateToProps = state => ({});
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./aboutUs.css";
import Sandro from "./Images/Sandro.png";
//import Dale from "../../images/aboutImages/Dale.png";
import Chris from "./Images/Chris.png";
/*import Yu from "../../images/aboutImages/Yu.png";
import Caffrey from "../../images/aboutImages/Caffrey.png";*/
import Lance from "./Images/Lance.png";
/*import Alex from "../../images/aboutImages/Alex.png";
import Yuta from "../../images/aboutImages/Yuta.png";
import Tien from "../../images/aboutImages/Tien.png";
import Vinny from "../../images/aboutImages/Vinny.png";*/

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
              <Grid item className="teamMemberContainer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ssallenbach/"
                >
                  <img className="aboutPage-images" src={Sandro} alt="" />
                  <br /> <div id="AboutPageNames">Sandro Sallenbach</div>
                </a>
                <div id="AboutPageRoles">Project Manager</div>
              </Grid>
              <Grid item className="teamMemberContainer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lance-ngo-a1892a5/"
                >
                  <img className="aboutPage-images" src={Lance} alt="" />
                  <br /> <div id="AboutPageNames">Lance Ngo</div>{" "}
                </a>
                <div id="AboutPageRoles">Product Owner</div>
              </Grid>
              <Grid item className="teamMemberContainer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/crdouglas94/"
                >
                  <img className="aboutPage-images" src={Chris} alt="" />
                  <br /> <div id="AboutPageNames">Chris Douglas</div>{" "}
                </a>
                <div id="AboutPageRoles">Confused Coffee Guy</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
});

const mapStateToProps = state => ({});
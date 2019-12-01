import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  CircularProgress,
  withStyles,
  withWidth
} from "@material-ui/core";
// import { saveRecord } from "../../actions/adminActions";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./indivSchool.css";

// Component CSS
let styles = {
  root: {
    width: "100%",
    marginTop: 30,
    overflowX: "auto",
    marginBottom: 20
  }
};

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

class IndivSchoolNBA extends Component {
  constructor() {
    super();

    this.state = {
      nbaPlayers: [],
      schoolName: "San Jose State University",
      schoolConference: "Mountain West",
      schoolMascot: "Spartans",
      cityName: "San Jose",
      state: "California",
      logoImage: "http://content.sportslogos.net/logos/34/828/full/2616.png"
    };
    this.saveNBAInfo = this.saveNBAInfo.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch("/api/nbaplayers")
      .then(res => res.json())
      .then(resultPlayers =>
        this.setState({ nbaPlayers: resultPlayers }, () =>
          console.log("Players found...", resultPlayers)
        )
      );
  }

  saveNBAInfo(d1, d2) {
    let tempSchoolInfo = {
      name: "school"
    };
    // this.props.saveRecord(tempSchoolInfo);
  }

  render() {
    let { classes } = this.props;

    if (this.state.schoolName === null) {
      this.props.history.push("/");
      return null;
    } else {
      const { individualSchoolNBA } = this.props.individualSchoolNBA;

      let players;

      players = this.state.nbaPlayers.map(player => {
        return (
          <StyledTableRow key={player.PlayerName}>
            <StyledTableCell component="th" scope="row">
              {player.PlayerName}
            </StyledTableCell>
            <StyledTableCell align="right">{player.Position}</StyledTableCell>
            <StyledTableCell align="right">{player.DraftYear}</StyledTableCell>
            <StyledTableCell align="right">{player.NBATeam}</StyledTableCell>
            <StyledTableCell align="right">$ 0.00</StyledTableCell>
          </StyledTableRow>
        );
      });

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
                    md={9}
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
                          Graduates in the NBA
                      </Grid>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-start">
                      <Paper className={classes.root}>
                        <Table aria-label="customized table">
                          <TableHead>
                            <StyledTableRow>
                              <StyledTableCell>Player Name</StyledTableCell>
                              <StyledTableCell align="right">
                                Position
                            </StyledTableCell>
                              <StyledTableCell align="right">
                                Draft Year
                            </StyledTableCell>
                              <StyledTableCell align="right">
                                Current NBA Team
                            </StyledTableCell>
                              <StyledTableCell align="right">
                                Salary
                            </StyledTableCell>
                            </StyledTableRow>
                          </TableHead>
                          <TableBody>{players}</TableBody>
                        </Table>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            )}
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  individualSchoolNBA: state.individualSchoolNBA,
  query: state.query
});
export default connect(
  mapStateToProps,
  // { saveRecord }
  {}
)(withStyles(styles)(withWidth()(IndivSchoolNBA)));

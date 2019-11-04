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

class IndivSchoolRecord extends Component {
  constructor() {
    super();
    this.state = {};
    this.saveRecordInfo = this.saveRecordInfo.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  saveRecordInfo(d1, d2) {
    let tempSchoolInfo = {
      name: "school"
    };
    // this.props.saveRecord(tempSchoolInfo);
  }

  render() {
    let { classes } = this.props;

    if (this.props.individualSchoolRecord.schoolName === null) {
      this.props.history.push("/");
      return null;
    } else {
      const { individualSchoolRecord } = this.props.individualSchoolRecord;

      let records;

      records = individualSchoolRecord.record.map(record => {
        return (
          <StyledTableRow key={record.year}>
            <StyledTableCell component="th" scope="row">
              {record.year}
            </StyledTableCell>
            <StyledTableCell align="right">{record.wins}</StyledTableCell>
            <StyledTableCell align="right">{record.losses}</StyledTableCell>
            <StyledTableCell align="right">
              {((100 * record.wins) / (record.wins + record.losses)).toFixed(2)}
              %
            </StyledTableCell>
          </StyledTableRow>
        );
      });

      return (
        <div class="wholePage" style={{ minHeight: window.innerHeight - 180 }}>
          {individualSchoolRecord.schoolName == null ? (
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
                        src={individualSchoolRecord.logoImage}
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
                        {individualSchoolRecord.schoolName}
                      </Grid>
                      <Grid item class="schoolConference">
                        School Record
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="flex-start">
                    <Paper className={classes.root}>
                      <Table aria-label="customized table">
                        <TableHead>
                          <StyledTableRow>
                            <StyledTableCell>Year</StyledTableCell>
                            <StyledTableCell align="right">
                              Wins
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              Losses
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              Percentage
                            </StyledTableCell>
                          </StyledTableRow>
                        </TableHead>
                        <TableBody>{records}</TableBody>
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
  individualSchoolRecord: state.individualSchoolRecord,
  query: state.query
});
export default connect(
  mapStateToProps,
  // { saveRecord }
  {}
)(withStyles(styles)(withWidth()(IndivSchoolRecord)));

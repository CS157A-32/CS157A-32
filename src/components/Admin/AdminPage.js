import React, { Component } from "react";
import { logoutUser } from "../../actions/authActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import {
  Grid,
  Button,
  TextField,
  Typography,
  withStyles,
  withWidth,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import axios from "axios";

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

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      college: null,
      conference: null,
      position: null,
      yearDrafted: null,
      team: null,
      salary: null,
      team2: null,
      salary2: null,
      id2: null,
      id3: null,
      NBAPlayers: [],
      open: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("/api/nba/allPlayers")
      .then(res => {
        this.setState({ NBAPlayers: res.data });
      })
      .catch(err => console.log(err));
  }

  handleLogout() {
    this.props.logoutUser();
    this.props.history.push("/");
  }

  // update the component state of TextField
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitEdit(e) {
    e.preventDefault();
    let editPlayer = {
      id: this.state.id2,
      team: this.state.team2,
      salary: this.state.salary2
    };

    axios
      .post("/api/nba/editPlayer", editPlayer)
      .then(res => {
        this.setState({ open: true });
      })
      .catch(err => console.log(err));
  }

  onSubmitDelete(e) {
    e.preventDefault();
    let deletePlayer = {
      playerId: this.state.id3
    };

    axios
      .post("/api/nba/deletePlayer", deletePlayer)
      .then(res => {
        this.setState({ open: true });
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    e.preventDefault();
    let newPlayer = {
      name: this.state.name,
      college: this.state.college,
      conference: this.state.conference,
      position: this.state.position,
      yeardrafted: this.state.yearDrafted,
      team: this.state.team,
      salary: this.state.salary
    };
    axios
      .post("/api/nba/addPlayer", newPlayer)
      .then(res => {
        this.setState({ open: true });
      })
      .catch(err => console.log(err));
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    let players;
    let { classes } = this.props;

    if (this.state.NBAPlayers[0] != null) {
      players = this.state.NBAPlayers.map(player => {
        return (
          <StyledTableRow key={player.id}>
            <StyledTableCell component="th" scope="row">
              {player.id}
            </StyledTableCell>
            <StyledTableCell align="left">{player.name}</StyledTableCell>
            <StyledTableCell align="left">{player.college}</StyledTableCell>
            <StyledTableCell align="left">{player.position}</StyledTableCell>
            <StyledTableCell align="left">{player.nbasince}</StyledTableCell>
            <StyledTableCell align="left">{player.team}</StyledTableCell>
            <StyledTableCell align="right">
              ${" "}
              {player.salary.toLocaleString("en", {
                useGrouping: true
              })}
            </StyledTableCell>
          </StyledTableRow>
        );
      });
    }
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span id="message-id">Query submitted</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="#3cb043"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />

        <Grid container id="TeamContainer">
          <Grid id="AdminContainerTitle" item xs={12} lg={12}>
            Administrator Panel
          </Grid>
          <Grid item xs={12} lg={12}>
            Welcome, {this.props.auth.user.username}
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justify="center"
          >
            <ExpansionPanel
              defaultExpanded={false}
              square="false"
              style={{ marginBottom: 8 }}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.subtitles} variant="subtitle2">
                  Current NBA Players
                </Typography>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelDetails>
                <Paper className={classes.root}>
                  <Table aria-label="customized table">
                    <TableHead>
                      <StyledTableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">College</StyledTableCell>
                        <StyledTableCell align="left">Position</StyledTableCell>
                        <StyledTableCell align="left">
                          Year Drafted
                        </StyledTableCell>
                        <StyledTableCell align="left">NBA Team</StyledTableCell>
                        <StyledTableCell align="right">Salary</StyledTableCell>
                      </StyledTableRow>
                    </TableHead>
                    <TableBody>{players}</TableBody>
                  </Table>
                </Paper>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Grid
            container
            spacing={0}
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item>
              Add a new Player
              <form
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
                onSubmit={this.onSubmit}
              >
                <TextField
                  id="outlined-name"
                  value={this.state.name}
                  onChange={this.onChange}
                  name="name"
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-college"
                  value={this.state.college}
                  onChange={this.onChange}
                  name="college"
                  label="College"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-conference"
                  value={this.state.conference}
                  onChange={this.onChange}
                  name="conference"
                  label="Conference"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-position"
                  value={this.state.position}
                  onChange={this.onChange}
                  name="position"
                  label="Position"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-yearDrafted"
                  value={this.state.yearDrafted}
                  onChange={this.onChange}
                  name="yearDrafted"
                  label="Year Drafted"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-team"
                  value={this.state.team}
                  onChange={this.onChange}
                  name="team"
                  label="NBA Team"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-salary"
                  value={this.state.salary}
                  onChange={this.onChange}
                  name="salary"
                  label="Salary"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  style={{ marginTop: 10, marginBottom: 15 }}
                >
                  Submit
                </Button>
              </form>
            </Grid>

            <Grid item>
              Edit a Player
              <form
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
                onSubmit={this.onSubmitEdit}
              >
                <TextField
                  id="outlined-id2"
                  value={this.state.id2}
                  onChange={this.onChange}
                  name="id2"
                  label="Player ID"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-team2"
                  value={this.state.team2}
                  onChange={this.onChange}
                  name="team2"
                  label="New NBA Team"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  id="outlined-salary2"
                  value={this.state.salary2}
                  onChange={this.onChange}
                  name="salary2"
                  label="New Salary"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  style={{ marginTop: 10, marginBottom: 15 }}
                >
                  Submit
                </Button>
              </form>
            </Grid>

            <Grid item>
              Delete a Player
              <form
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
                onSubmit={this.onSubmitDelete}
              >
                <TextField
                  id="outlined-id3"
                  value={this.state.id3}
                  onChange={this.onChange}
                  name="id3"
                  label="Player ID"
                  margin="normal"
                  variant="outlined"
                  required="true"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  style={{ marginTop: 10, marginBottom: 15 }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Button
          id="LogoutButton"
          variant="contained"
          color="primary"
          onClick={this.handleLogout}
        >
          Logout
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logoutUser
})(withStyles(styles)(withWidth()(AdminPage)));

import React, { Component } from "react";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

import { connect } from "react-redux";
import {
  Grid,
  Button,
  TextField,
  Typography,
  withWidth,
  Card
} from "@material-ui/core";
import axios from "axios";

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
      id3: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    axios.post("/api/nba/editPlayer", editPlayer);
  }

  onSubmitDelete(e) {
    e.preventDefault();
    let deletePlayer = {
      playerId: this.state.id3
    };
    axios.post("/api/nba/deletePlayer", deletePlayer);
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
    axios.post("/api/nba/addPlayer", newPlayer);
  }

  render() {
    return (
      <div>
        <Grid container id="TeamContainer">
          <Grid id="AboutContainerTitle" item xs={12} lg={12}>
            Administrator Page
          </Grid>
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
})(withWidth()(AdminPage));

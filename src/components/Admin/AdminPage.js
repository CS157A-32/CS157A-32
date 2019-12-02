import React, { Component } from "react";
// import "./aboutUs.css";
import PropTypes from "prop-types";
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

import { createPlayer } from "../../actions/adminActions";

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      college: null,
      conference: null,
      position: null,
      yearDrafted: null,
      salary: null,
      isFilledOut: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    // if (!this.props.auth.isAuthenticated) {
    //   this.props.history.push("/");
    // }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // update the component state of TextField
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let newPlayer = {
      name: this.state.name,
      college: this.state.college,
      conference: this.state.conference,
      position: this.state.position,
      yearDrafted: this.state.yearDrafted,
      salary: this.state.salary
    };
    axios.post("/api/nbaplayers/addPlayer", newPlayer);

    // this.props.createPlayer(newPlayer);

    // this.props.auth
    //   .getAccessToken()
    //   .then(token => {
    //     this.props.uploadNotebookDraft(uploadData, this.props.history, token);
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Grid container id="TeamContainer">
          <Grid id="AboutContainerTitle" item xs={12} lg={12}>
            Administrator Page
          </Grid>

          <Grid container spacing={0} direction="column" alignItems="center">
            <Grid item>Add a new Player</Grid>
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
                id="outlined-salary"
                value={this.state.salary}
                onChange={this.onChange}
                name="salary"
                label="Salary"
                margin="normal"
                variant="outlined"
                required="true"
              />
              {this.state.isFilledOut ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="default"
                  style={{ marginTop: 10, marginBottom: 15 }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  disabled={true}
                  type="submit"
                  variant="contained"
                  color="default"
                  style={{ marginTop: 10, marginBottom: 15 }}
                >
                  Submit
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
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
  createPlayer
})(withWidth()(AdminPage));

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  // onSubmit = credentials => event => {
  //   event.preventDefault();
  //   this.props.getSchoolRecord({
  //     username: credentials.username,
  //     password: credentials.password
  //   });
  // };

  render() {
    return (
      <Grid container id="loginContainer">
        <Grid id="LoginContainerTitle" item xs={12} lg={12}>
          Administrator Login
        </Grid>

        <Grid
          id="LoginGrid"
          container
          spacing={0}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Paper id="LoginPaper">
            <br></br>
            <FormControl id="LoginForm" onSubmit={this.onSubmit}>
              <TextField
                id="filled-required"
                label="Username"
                name="username"
                defaultValue="Hello World"
                margin="normal"
                variant="filled"
                value={this.state.username}
                onChange={this.onChange}
              />

              <TextField
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="filled"
                value={this.state.password}
                onChange={this.onChange}
              />
              <br></br>

              <Button
                id="LoginButton"
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
              >
                Login
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid style={{ minHeight: window.innerHeight - 328 }}></Grid>
      </Grid>
    );
  }
}

// Login.PropTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

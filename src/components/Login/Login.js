import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import "./login.css";



export default (class Login extends Component {
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
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    //e.preventDefualt(); //saw this on the Abode example. dont know what it does but it threw an error when i left it in

    const userData = {
      username: this.state.username,
      password: this.state.password,
    };

    //i think this is where we would want the authentication stuff
  }


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
          alignItems="center">

          <Paper id="LoginPaper">
            <FormControl id="LoginForm" onSubmit={this.onSubmit}>

              <TextField
                id="filled-required"
                label="Username"
                name="username"
                defaultValue="Hello World"
                margin="normal"
                variant="filled"
                value={this.state.username}
                onChange={this.onChange} />

              <TextField
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="filled"
                value={this.state.password}
                onChange={this.onChange} />

              <Button
                id="LoginButton"
                variant="contained"
                color="primary"
                onClick={this.onSubmit}>
                Login
              </Button>
            </FormControl>
          </Paper>

        </Grid>
        <Grid style={{ minHeight: window.innerHeight - 328 }}>

        </Grid>
      </Grid>
    );
  }
});
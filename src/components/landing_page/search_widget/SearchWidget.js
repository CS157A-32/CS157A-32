import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import SearchField from "./SearchField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";
import { white } from "material-ui/styles/colors";

import { submitQuery, saveQuery } from "../../../actions/searchActions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    opacity: 1
  },
  paper: {
    textAlign: "center",
    height: 70,
    position: "relative"
  },
  alert: {
    paddingTop: 20,
    paddingRight: 50,
    color: white,
    fontSize: 20
  }
});

class SearchWidget extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      showDesAlert: false,
      showDateAlert: false
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onHandleSearchValue = this.onHandleSearchValue.bind(this);
  }

  componentDidMount = () => {
    // if (this.props.query.searchQuery != null) {
    //   this.setState({
    //     searchValue: this.props.query.searchQuery.searchValue,
    //   });
    // }
  };

  onSearchClick() {
    //NOTE: we assume user will search for name
    // submit query as object with to submitQuery at queryActions.js

    const newQuery = {
      searchValue: this.state.searchValue
    };

    //Check if the searchValue is provided or not.
    if (!this.state.searchValue) {
      this.setState({ showDesAlert: true });
    } else {
      this.setState({ showDesAlert: false });
    }

    if (this.state.searchValue) {
      this.props.history.push("/searchResultOverview");
      // this.props.saveQuery(newQuery);
      this.props.submitQuery(newQuery);
    }
  }

  onHandleSearchValue(searchValueProps) {
    this.setState({ searchValue: searchValueProps });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item lg={6} style={{ margin: 1, paddingTop: 80 }}>
            <Paper className={classes.paper}>
              <SearchField
                searchValue={this.state.searchValue}
                onHandleSearchValue={this.onHandleSearchValue}
              />
            </Paper>
          </Grid>
          <Grid item style={{ margin: 1, paddingLeft: 20, paddingTop: 80 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onSearchClick}
            >
              Search
            </Button>
          </Grid>
          <Grid item lg={7}>
            <Alert
              className={classes.alert}
              variant="warning"
              show={this.state.showDesAlert}
            >
              Please Enter a Search Argument
            </Alert>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.query
});

export default connect(
  mapStateToProps,
  { submitQuery, saveQuery }
)(withStyles(styles)(withRouter(SearchWidget)));

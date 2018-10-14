import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { Consumer } from "../Context";
import "../css/nav.css";
import { Link } from "react-router-dom";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Consumer>
        {context => {
          return (
            <div className="NavBar">
              <Paper className={classes.paper}>
                <Grid container spacing={0} className="navGrid">
                  <Grid item xs={6} sm={3}>
                    <Link to="/requests">Requests</Link>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Link to="/help">Help</Link>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Link to="/analytics">Analytics</Link>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Link to="/camps">Camps</Link>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

NavBar.protoTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);

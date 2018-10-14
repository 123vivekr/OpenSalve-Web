import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Consumer } from "../Context";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class RequestCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={root}>
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid item xs={6} sm={3}>
              Details
            </Grid>
            <Grid item xs={6} sm={3}>
              Map
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

RequestCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RequestCard);

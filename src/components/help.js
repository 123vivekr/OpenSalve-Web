import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Help extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={root}>
        <NavBar val={1} />
      </div>
    );
  }
}

Help.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Help);

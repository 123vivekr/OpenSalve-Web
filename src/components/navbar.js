import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { Consumer } from "../Context";
import "../css/nav.css";
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';

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
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    styles={
                      context.state.currentPage == "requests" && {
                        borderBottomColor: "red",
                        borderBottom: "2px"
                      }
                    }
                  >
                      <Button
                        variant='contained'
                        color='primary'
                      >
                    <Link
                      to="/requests"
                      onClick={() => context.actions.setCurrentPage("requests")}
                      style={{textDecoration: 'none', color: 'white'}}
                    >
                      Requests
                    </Link>
                    </Button>
                </Grid>
                  <Grid item xs={6} sm={3}>
<Button
                        variant='contained'
                        color='primary'
                      >
                    <Link
                      to="/help"
                      onClick={() => context.actions.setCurrentPage("help")}
                      style={{textDecoration: 'none', color: 'white'}}
                    >
Help
                    </Link>
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={3}>
  <Button
                        variant='contained'
                        color='primary'
                      >
                    <Link
                      to="/analytics"
                      onClick={() => context.actions.setCurrentPage("analytics")}
                      style={{textDecoration: 'none', color: 'white'}}
                    >
                        Anaytics
                    </Link>
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={3}>
  <Button
                        variant='contained'
                        color='primary'
                      >
                    <Link
                      to="/camps"
                      onClick={() => context.actions.setCurrentPage("camps")}
                      style={{textDecoration: 'none', color: 'white'}}
                    >
                     Camps
                    </Link>
                    </Button>
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

export default withRouter(withStyles(styles)(NavBar));

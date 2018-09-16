import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
        Auth: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            navbar: {
                backgroundColor: 'black',
            }
        },
    });

class Auth extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="Auth">
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Navbar</Paper>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    </Grid>
                    <Grid item xx={12} sm={8}>
                        <Paper className={classes.paper}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);

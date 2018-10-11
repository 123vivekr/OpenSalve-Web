import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class NavBar extends Component {
    render() {
        const { classes } =  this.props;
        return(
            <div className="NavBar">
                <Paper className={classes.paper}>{this.props.title}</Paper>
            </div>
        );
    }
}

NavBar.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class NavBar extends Component {
    render() {
        const { classes } =  this.props;
        return(
            <div className="NavBar">
                <Paper className={classes.paper}>
                    <Button onClick={() => this.props.history.push("/request")} id="button" disabled={this.props.title === "request"} variant='contained' className={classes.button} color='primary'>
                       Request
                    </Button>
                    <Button onClick={() => this.props.history.push("/auth")} id="button" disabled={this.props.title === "auth"} variant='contained' className={classes.button} color='primary'>
                        Auth
                    </Button>
                    <Button onClick={() => this.props.history.push("/help")} id="button" disabled={this.props.title === "help"} variant='contained' className={classes.button} color='primary'>
                        Help
                    </Button>
                </Paper>
            </div>
        );
    }
}

NavBar.protoTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));

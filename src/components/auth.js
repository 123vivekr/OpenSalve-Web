import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavBar from './navbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Consumer } from '../Context'

const styles = theme => ({
    Auth: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: 'lightgreen',
        size: 'large'
    },
});

class Auth extends Component {
    login = (classes) => (
        <div className="Auth">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} sm={2}>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <TextField
                            id="username"
                            label="User Name"
                            className={classes.textField}
                            // value={''}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            // value={''}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <br />
                        <Button variant="contained" className={classes.button}>
                            Login
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2}>
                </Grid>
            </Grid>
        </div>
    )

    register = (classes) => (
        <div className="Auth">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <NavBar title={'auth'}/>
                </Grid>
                <Grid item xs={12} sm={2}>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <TextField
                            id="username"
                            label="User Name"
                            className={classes.textField}
                            // value={''}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            // value={''}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            // value={''}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            // value={''}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br />
                        <br />
                        <Button variant="contained" className={classes.button}>
                           Register
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2}>
                </Grid>
            </Grid>
        </div>
    )

    render() {
        const { classes, login } = this.props;
        return <Consumer>
            {context => {
                console.log(context);
                return (
                    <div>
                        {
                            login ?
                                this.login(classes)
                                :
                                this.register(classes)
                        }
                    </div>

                )
            }}
        </Consumer>;
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Consumer } from "../Context";
import { login, register } from "../utils/api";

const styles = theme => ({
  Auth: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "lightgreen",
    size: "large"
  }
});

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }

  submitLoginForm = async e => {
    e.preventDefault();
    try {
      await login(this.state.username, this.state.password);
    } catch (err) {
      this.setState({ error: err.detail });
    }
  };

  submitRegisterForm = async e => {
    e.preventDefault();
    try {
      await register(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.name
      );
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  login = classes => (
    <div className="Auth">
      <Grid container spacing={24}>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <TextField
              id="username"
              label="User Name"
              className={classes.textField}
              onChange={e => {
                e.preventDefault();
                this.setState({ username: e.target.value });
              }}
              margin="normal"
            />
            <br />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              onChange={e => {
                e.preventDefault();
                this.setState({ password: e.target.value });
              }}
              margin="normal"
            />
            <br />
            <br />
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.submitLoginForm}
            >
              Login
            </Button>
            <br />
            <br />
            <span style={{ color: "red" }}>{this.state.error}</span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </div>
  );

  register = classes => (
    <div className="Auth">
      <Grid container spacing={24}>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <TextField
              id="username"
              label="User Name"
              className={classes.textField}
              // value={''}
              onChange={e => {
                e.preventDefault();
                this.setState({ username: e.target.value });
              }}
              margin="normal"
            />
            <br />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              onChange={e => {
                e.preventDefault();
                this.setState({ password: e.target.value });
              }}
              margin="normal"
            />
            <br />
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              onChange={e => {
                e.preventDefault();
                this.setState({ email: e.target.value });
              }}
              margin="normal"
            />
            <br />
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              onChange={e => {
                e.preventDefault();
                this.setState({ name: e.target.value });
              }}
              margin="normal"
            />
            <br />
            <br />
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.submitRegisterForm}
            >
              Register
            </Button>
            <br />
            <br />
            <span style={{ color: "red" }}>{this.state.error}</span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </div>
  );

  render() {
    const { classes, login } = this.props;
    return (
      <Consumer>
        {context => {
          console.log(context);
          return (
            <div>{login? this.login(classes) : this.register(classes)}</div>
          );
        }}
      </Consumer>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Auth);

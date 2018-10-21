import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router-dom";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class CenteredTabs extends React.Component {
    state = {
        value: this.props.val,
        pages : [
            "requests",
            "help",
            "analytics",
            "camps"
        ]
    };

    handleChange = (event, value) => {
        this.setState({ value },() => {
            let gotoRoute = this.state.pages[this.state.value]
            this.props.history.push(gotoRoute)
        })
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Requests" />
                    <Tab label="Help" />
                    <Tab label="Analytics" />
                    <Tab label="Camps" />
                </Tabs>
            </Paper>

        );
    }
  state = {
    value: this.props.val,
    pages : [
        "/requests",
        "/help",
        "/analytics",
        "/camps"
    ]
  };

  handleChange = (event, value) => {
    this.setState({ value },() => {
        let gotoRoute = this.state.pages[this.state.value]
        this.props.history.push(gotoRoute)
    })
  };
  componentDidMount() {
        let myroute = this.state.pages.indexOf(this.props.location.pathname)
        this.setState({ value: myroute})
    }
  render() {
    const { classes } = this.props;
    console.log(this.props.location.pathname)
    return (
        <Paper className={classes.root}>
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            >
            <Tab label="Requests" />
            <Tab label="Help" />
            <Tab label="Analytics" />
            <Tab label="Camps" />
            </Tabs>
        </Paper>

    );
  }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CenteredTabs));
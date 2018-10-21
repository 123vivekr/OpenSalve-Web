import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Consumer } from "../Context";
import ReactMapGL,{ Marker } from 'react-map-gl';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    }
});

class RequestCard extends Component {
    state = {
        viewport: {
            width: 400,
            height: 200,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={0}>
                        <Grid item xs={10} sm={3}>
                            Details
                        </Grid>
                        <Grid item xs={1} sm={3}>
                            Map
                            <ReactMapGL
                                {...this.state.viewport}
                                onViewportChange={(viewport) => this.setState({viewport})}
                                mapboxApiAccessToken="pk.eyJ1IjoiYmhhc2thcnh1aSIsImEiOiJjam43ZzZkcmc2ZGJpM2txY3Y4amFwY3VwIn0.d5syOLoEU7crgzP260sjAA"
                            >
                                <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
                                    <div style={{color: 'red'}} >x</div>
                                </Marker>
                            </ReactMapGL>
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

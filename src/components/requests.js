import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RequestCard from "./requestcard";
import { getAllReqs } from "../utils/api";

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class Request extends Component {
    state = {
        reqs: [],
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let res = await getAllReqs();
        console.log(res.data.results);
        res.data.results.forEach(item => {
            item.lat = Number(item.lat);
            item.lng= Number(item.lng);
        })
        this.setState({ reqs: res.data.results });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={root}>
                <br/>
                { this.state.reqs.map((item) => <RequestCard key={item.id} mapData={item} />) }
            </div>
        );
    }
}
Request.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Request);

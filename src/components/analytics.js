import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { getAllReqs } from "../utils/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Legend,
  Pie
} from "recharts";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const chartTypes = Object.freeze({ none: 0, pie: 1, bar: 2, line: 3 });
const dataSets = Object.freeze({ none: 0, requests: 1, users: 2, camps: 3 });
const xAxisOptions = Object.freeze({ none: 0, resources: 1 });
const yAxisOptions = Object.freeze({ none: 0, noOfReqs: 1 });

class Analytics extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: dataSets.none,
      chartType: chartTypes.none,
      xAxisOption: xAxisOptions.none,
      yAxisOption: yAxisOptions.none,
      renderChart: false
    };
  }

  fetchDataset = async dataSet => {
    switch (dataSet) {
      case dataSets.requests:
        let res = await getAllReqs();
        this.setState({ rawData: res.data.results });
    }
  };

  computeWithX = x => {
    let data = [];
    switch (this.state.yAxisOption) {
      case yAxisOptions.noOfReqs:
        let med = 0,
          food = 0;
        for (let i of this.state.rawData) {
          console.log(i);
          if (i.need_medicine) med++;
          if (i.need_food) food++;
        }
        data.push({ resource: "medicine", nos: med });
        data.push({ resource: "food", nos: food });
    }
    return data;
  };

  compute = () => {
    let data = [];
    switch (this.state.xAxisOption) {
      case xAxisOptions.resources:
        data = this.computeWithX(xAxisOptions.resources);
    }
    return data;
  };

  renderChart = e => {
    e.preventDefault();
    const data = this.compute();
    this.setState({ renderChart: true, data });
  };

  handleChange = e => {
    if (e.target.name == "dataSet") {
      this.fetchDataset(e.target.value);
    }
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={root}>
        <div className="query" style={{ padding: "20px" }}>
          <h1>Query</h1>
          <span>Data set : </span>
          <Select
            value={this.state.dataSet}
            onChange={this.handleChange}
            inputProps={{
              name: "dataSet",
              id: "dataSet"
            }}
          >
            <MenuItem value={dataSets.none}>None</MenuItem>
            <MenuItem value={dataSets.requests}>Requests</MenuItem>
            <MenuItem value={dataSets.users}>Users</MenuItem>
            <MenuItem value={dataSets.camps}>Camps</MenuItem>
          </Select>
          <br />
          <br />
          <span>Chart Type : </span>
          <Select
            value={this.state.chartType}
            onChange={this.handleChange}
            inputProps={{
              name: "chartType",
              id: "chartType"
            }}
          >
            <MenuItem value={chartTypes.none}>None</MenuItem>
            <MenuItem value={chartTypes.pie}>Pie</MenuItem>
            <MenuItem value={chartTypes.bar}>Bar</MenuItem>
            <MenuItem value={chartTypes.line}>Line</MenuItem>
          </Select>
          {this.state.chartType ? (
            <React.Fragment>
              <br />
              <br />
              <span>with X-Axis as</span>
              &nbsp;
              <Select
                value={this.state.xAxisOption}
                onChange={this.handleChange}
                inputProps={{
                  name: "xAxisOption",
                  id: "xAxisOption"
                }}
              >
                <MenuItem value={xAxisOptions.none}>None</MenuItem>
                <MenuItem value={xAxisOptions.resources}>Resources</MenuItem>
              </Select>
              &nbsp;
              <span>and Y-Axis as</span>
              &nbsp;
              <Select
                value={this.state.yAxisOption}
                onChange={this.handleChange}
                inputProps={{
                  name: "yAxisOption",
                  id: "yAxisOption"
                }}
              >
                <MenuItem value={yAxisOptions.none}>None</MenuItem>
                <MenuItem value={yAxisOptions.noOfReqs}>
                  No. of Requests
                </MenuItem>
              </Select>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.state.xAxisOption && this.state.yAxisOption ? (
            <React.Fragment>
              <br />
              <br />
              <Button
                onClick={this.renderChart}
                style={{ backgroundColor: "violet" }}
              >
                Submit
              </Button>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        {this.state.renderChart ? (
          <div className="chart" style={{ padding: "20px" }}>
            <h1>Chart</h1>
            {this.state.chartType == chartTypes.bar ? (
              <BarChart
                width={600}
                height={300}
                data={this.state.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="resource" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="nos" fill="#8884d8" />
              </BarChart>
            ) : (
              <PieChart
                width={730}
                height={250}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <Pie
                  data={this.state.data}
                  dataKey="nos"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                />
              </PieChart>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analytics);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Consumer } from "../Context";
import ReactTable from "react-table";
import "react-table/react-table.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Camps extends Component {
  constructor() {
    super();
    this.state = {
      noOfRefugees: 200,
      capacity: 560,
      resources: {
        foodPacks: 400,
        blankets: 167,
        waterBottles: 589
      },
      inhabitants: [
        {
          id: 1,
          name: "Aswin"
        },
        {
          id: 2,
          name: "Arun"
        }
      ]
    };
  }
  render() {
    const { classes } = this.props;
    const headerStyle = {
      backgroundColor: "grey",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold"
    };
    const style = {
      textAlign: "center"
    };
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        headerStyle,
        style
      },
      {
        Header: "Name",
        accessor: "name",
        headerStyle,
        style
      },
      {
        Header: "Del",
        Cell: props => (
          <Button style={{ backgroundColor: "red", color: "white" }}>
            Del
          </Button>
        ),
        headerStyle,
        style
      },
      {
        Header: "Edit",
        Cell: props => (
          <Button style={{ backgroundColor: "green", color: "white" }}>
            Edit
          </Button>
        ),
        headerStyle,
        style
      }
    ];
    const greyText = {
      color: "grey",
      fontSize: "24px"
    };
    const regularText = {
      fontSize: "18px"
    };
    return (
      <div className={root}>
        <div className="dash" style={{}}>
          <div
            style={{
              display: "inline-block",
              width: "50%",
              height: "100%",
              textAlign: "center"
            }}
          >
            <span style={greyText}>No. of refugees</span>
            <br />
            <span style={regularText}>{this.state.noOfRefugees}</span>
            <br />
            <br />
            <span style={greyText}>Capacity</span>
            <br />
            <span style={regularText}>{this.state.capacity}</span>
            <br />
          </div>
          <div
            style={{
              display: "inline-block",
              width: "50%",
              height: "100%",
              textAlign: "center"
            }}
          >
            <span style={greyText}>Food Packets</span>
            <br />
            <span style={regularText}>{this.state.resources.foodPacks}</span>
            <br />
            <br />
            <span style={greyText}>Blankets</span>
            <br />
            <span style={regularText}>{this.state.resources.blankets}</span>
            <br />
            <br />
            <span style={greyText}>Water Bottles</span>
            <br />
            <span style={regularText}>{this.state.resources.waterBottles}</span>
            <br />
            <br />
          </div>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button style={{ backgroundColor: "green", color: "white" }}>
              Register new inhabitant
            </Button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button style={{ backgroundColor: "blue", color: "white" }}>
              Record resource intake
            </Button>
          </div>
        </div>
        <br />
        <br />

        <ReactTable
          data={this.state.inhabitants}
          columns={columns}
          filterable
          sortable
        />
      </div>
    );
  }
}

Camps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Camps);

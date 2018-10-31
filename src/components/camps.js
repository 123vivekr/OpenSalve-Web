import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Consumer } from "../Context";
import SortableTbl from "react-sort-search-table";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class BaseDeleteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    alert("delete " + this.props.rowData.name);
    console.log(this.props.rowData, this.props.tdData);
  }
  render() {
    return (
      <td>
        <input
          type="button"
          className="btn btn-danger"
          value="Delete"
          onClick={this.deleteItem}
        />
      </td>
    );
  }
}

// BaseDeleteComponent.propTypes = {
//   rowData: React.PropTypes.object,
//   tdData: React.PropTypes.string
// };

class BaseEditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.editItem = this.editItem.bind(this);
  }
  editItem() {
    alert("edit " + this.props.rowData.name);
    console.log(this.props.rowData, this.props.tdData);
  }
  render() {
    return (
      <td>
        <input
          type="button"
          className="btn btn-warning"
          value="Edit"
          onClick={this.editItem}
        />
      </td>
    );
  }
}
// BaseEditComponent.propTypes = {
//   rowData: React.PropTypes.object,
//   tdData: React.PropTypes.string
// };

class Camps extends Component {
  constructor() {
    super();
    this.state = {
      inhabitants: [
        {
          id: 1,
          name: "asd"
        },
        {
          id: 2,
          name: "asef"
        }
      ]
    };
  }
  render() {
    const { classes } = this.props;
    const tHead = ["id", "name", "delete", "edit"];
    const col = ["id", "name", "delete", "edit"];
    return (
      <div className={root}>
        <SortableTbl
          tblData={this.state.inhabitants}
          tHead={tHead}
          customTd={[
            { custd: BaseEditComponent, keyItem: "edit" },
            { custd: BaseDeleteComponent, keyItem: "delete" }
          ]}
          dKey={col}
        />
      </div>
    );
  }
}

Camps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Camps);

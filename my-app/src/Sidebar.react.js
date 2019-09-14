import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export default class Sidebar extends Component {
  render() {
    return (
      <div style={{ float: "right" }}>
        <TextField placeholder="Placeholder" />
      </div>
    );
  }
}

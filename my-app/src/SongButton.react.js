import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";

class SongButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: props.songName, // String
      artistNames: props.artistNames // List
    };
  }

  render() {
    const artistNames = this.state.artistNames.join(", ");
    return (
      <Button
        style={{ height: 40, width: 400, margin: "4px 4px" }}
        variant="contained"
        color="secondary"
        onClick={this.props.updatePlayer}
      >
        {`${this.state.songName} by ${artistNames}`}
      </Button>
    );
  }
}

export default SongButton;

import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

class PlaylistButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: props.playlistName,
      embedCode: props.embedCode
    };
  }

  /* Update Playlist in PageContent. */
  updatePlaylist = () => {
    this.props.updatePlaylist(this.state.embedCode);
  };

  render() {
    return (
      <Button
        style={{ height: "40px", margin: "4px 4px" }}
        variant="contained"
        color="primary"
        onClick={this.updatePlaylist}
      >
        {this.state.playlistName}
      </Button>
    );
  }
}

export default PlaylistButton;

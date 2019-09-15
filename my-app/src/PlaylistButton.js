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
  }

  render() {
    const { playlistName, onClick } = this.props;

    return (
      <Button
        style={{ height: "40px", margin: "4px 4px" }}
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        {playlistName}
      </Button>
    );
  }
}

export default PlaylistButton;

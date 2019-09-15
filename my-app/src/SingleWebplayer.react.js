import React, { Component } from "react";

export default class SingleWebplayer extends Component {
  render() {
    const { songUri } = this.props;
    return (
      <iframe
        src={`https://open.spotify.com/embed/track/${songUri}`}
        width="400"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    );
  }
}

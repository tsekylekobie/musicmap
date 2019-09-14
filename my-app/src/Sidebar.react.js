import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Playlist from "./Playlist.js";
import PlaylistButton from "./PlaylistButton.js";

const Spotify = require("spotify-web-api-js");

/* Embed code for frequently used playlists. */
const usTop50 = (
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp"
    width="500"
    height="580"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
);
const globalTop50 = (
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF"
    width="500"
    height="580"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
);
const usViral50 = (
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZEVXbKuaTI1Z1Afx"
    width="500"
    height="580"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
);
const globalViral50 = (
  <iframe
    src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLiRSasKsNU9"
    width="500"
    height="580"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
);

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.spotify = new Spotify();
    this.state = {
      embedCode: usTop50
    };
    this.playlistElement = React.createRef();
  }

  /* Update Playlist being displayed on web page. */
  updatePlaylist = newCode => {
    console.log("this isn't changing");
    this.setState({ embedCode: newCode });
    console.log(this.playlistElement.current.state);
  };

  getSongs(playlistUri, limit = 10) {
    const url = `https://api.spotify.com/v1/playlists/${playlistUri}/tracks?limit=${limit}`;

    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQAh8XTLy66_6CnVzPunQjZDHBrTrxEF11arOztOYag5e6PgQpFB90gK-veusM4hQt0payOvfU8DBouRHFZZ1XXc4bn19DQA1Qp809Def2ulM731cC1jME7BwbBCTulDU17yZYAQkc05RdtqzI3aIQ"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        myJson.items.map(obj =>
          console.log(obj.track.name, obj.track.artists.map(x => x.name))
        );
      });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          borderRadius: 2,
          padding: "8px 16px",
          height: "100%",
          width: 500
        }}
      >
        <TextField
          placeholder="Search"
          // Gets songs for US Top Hits
          onChange={() => this.getSongs("37i9dQZEVXbLRQDuF5jeBp")}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <PlaylistButton
            playlistName="US Top 50"
            embedCode={usTop50}
            updatePlaylist={this.updatePlaylist}
          />
          <PlaylistButton
            playlistName="Global Top 50"
            embedCode={globalTop50}
            updatePlaylist={this.updatePlaylist}
          />
          <PlaylistButton
            playlistName="US Viral 50"
            embedCode={usViral50}
            updatePlaylist={this.updatePlaylist}
          />
          <PlaylistButton
            playlistName="Global Viral 50"
            embedCode={globalViral50}
            updatePlaylist={this.updatePlaylist}
          />
          <Playlist
            ref={this.playlistElement}
            embedCode={this.state.embedCode}
          />
        </div>
      </div>
    );
  }
}

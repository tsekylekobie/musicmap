import React, { Component } from "react";
import SingleWebplayer from "./SingleWebplayer.react";
import SongButton from "./SongButton.react";
import { Button } from "@material-ui/core";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songUri: null,
      currentPlaylist: "US Top 50",
      songs: []
    };
    this.getSongs(this.state.currentPlaylist);
  }

  playlistToUri = {
    "US Top 50": "37i9dQZEVXbLRQDuF5jeBp",
    "Global Top 50": "37i9dQZEVXbMDoHDwVN2tF",
    "US Viral 50": "37i9dQZEVXbKuaTI1Z1Afx",
    "Global Viral 50": "37i9dQZEVXbLiRSasKsNU9"
  };

  getSongs(playlistName, limit = 10) {
    const playlistUri = this.playlistToUri[playlistName];
    const url = `https://api.spotify.com/v1/playlists/${playlistUri}/tracks?limit=${limit}`;
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          // Get OAuth Token from:
          // https://developer.spotify.com/console/get-playlist/?playlist_id=59ZbFPES4DQwEjBpWHzrtC&market=&fields=
          "Bearer BQDRMUARNNTbW1Lti1n_TjdvoE293rDpv9HdTIdv6Cm2fhGNB3IZZ4s73s0t4_tWtmfFM6G7TwVFKcnN1aYnz0UYVFYmvOXHmeeq7W-LTHPvCf9QRbz0JNteT_gQ0oWgVlme17i-SIaGGC-ECg"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          songs: myJson.items.map(obj => (
            <SongButton
              key={obj.track.uri.substring(14)}
              songName={obj.track.name}
              artistNames={obj.track.artists.map(x => x.name)}
              updatePlayer={() => {
                this.setState({ songUri: obj.track.uri.substring(14) });
              }}
            />
          )),
          currentPlaylist: playlistName
        });
      });
  }

  generatePlaylistButton(playlistName) {
    return (
      <Button
        style={{ height: "40px", margin: "4px 4px" }}
        variant="contained"
        color="primary"
        onClick={() => this.getSongs(playlistName)}
      >
        {playlistName}
      </Button>
    );
  }

  render() {
    const { songs, currentPlaylist, songUri } = this.state;
    return (
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          borderRadius: 2,
          padding: "8px 16px",
          height: "100%",
          width: 400
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {this.generatePlaylistButton("US Top 50")}
          {this.generatePlaylistButton("Global Top 50")}
          {this.generatePlaylistButton("US Viral 50")}
          {this.generatePlaylistButton("Global Viral 50")}
        </div>
        {songs.length > 0 && songs}
        {songUri && <SingleWebplayer songUri={songUri} />}
      </div>
    );
  }
}

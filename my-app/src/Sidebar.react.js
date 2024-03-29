import React, { Component } from "react";
import SingleWebplayer from "./SingleWebplayer.react";
import SongButton from "./SongButton.react";
import { Button } from "@material-ui/core";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylist: "US Top 50",
      songs: [],
      accessToken: ""
    };
    this.getSongs(this.state.currentPlaylist);
  }

  playlistToUri = {
    "US Top 50": "37i9dQZEVXbLRQDuF5jeBp",
    "Global Top 50": "37i9dQZEVXbMDoHDwVN2tF",
    "US Viral 50": "37i9dQZEVXbKuaTI1Z1Afx",
    "Global Viral 50": "37i9dQZEVXbLiRSasKsNU9"
  };

  getSongs(playlistName, limit = 25) {
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
          "Bearer BQDpyoTXHmpqerSi_w9kwekewaVqlPB3oUspuOnQnvI5bsAZcI63Y1ByXcv5y7uoJuEfbzgTY76SDc0GicKpzfTnlH605D01TRMDww_sJaVJAV-EpK6EkYU4C6r3KaT-paijnDFPoEgcc78pmILXow"
        // "Bearer " + this.state.accessToken
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.props.clearSong();
        this.setState({
          songs: myJson.items.map(obj => ({
            uri: obj.track.uri.substring(14),
            name: obj.track.name,
            artists: obj.track.artists.map(x => x.name),
            updatePlayer: () => {
              this.props.updateSong(obj.track.uri.substring(14));
            }
          })),
          currentPlaylist: playlistName
        });
      });
  }

  fetchSpotifyKey() {
    const url = "https://accounts.spotify.com/api/token";
    console.log("fetching spotify key...");
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization:
          "2e4af3862b5643ceae92ac900d8f16a4:93fc728339374882920a6efc48baf79c"
      },
      body: {
        grant_type: "client_credentials"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({ accessToken: myJson["access_token"] });
      });
  }

  generateSongButtons() {
    const { songs } = this.state;
    return songs.map((obj, index) => (
      <SongButton
        key={obj.uri}
        number={index + 1}
        songName={obj.name}
        artistNames={obj.artists}
        updatePlayer={obj.updatePlayer}
        selected={obj.uri == this.props.currentSong}
      />
    ));
  }

  generatePlaylistButton(playlistName) {
    return (
      <Button
        style={{ height: "40px", margin: "4px 4px" }}
        variant={
          playlistName === this.state.currentPlaylist ? "contained" : "outlined"
        }
        color="primary"
        onClick={() => this.getSongs(playlistName)}
      >
        {playlistName}
      </Button>
    );
  }

  render() {
    const { songs } = this.state;
    const songUri = this.props.currentSong;
    console.log("Access token: ", this.state.accessToken);
    // this.fetchSpotifyKey();
    return (
      <div
        style={{
          backgroundColor: "#f0f0f0",
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
        {songs.length > 0 && (
          <div
            style={{
              maxHeight: 500,
              overflowY: "scroll",
              margin: "16px 0px",
              background:
                "linear-gradient(#f0f0f0 30%, hsla(0,0%,100%, 0)),linear-gradient(hsla(0,0%,100%,0) 10px, #f0f0f0 70%) bottom,radial-gradient(at top, rgba(0,0,0,0.2), transparent 70%), radial-gradient(at bottom, rgba(0,0,0,0.2), transparent 70%) bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 20px, 100% 20px, 100% 10px, 100% 10px",
              backgroundAttachment: "local, local, scroll, scroll"
            }}
          >
            {this.generateSongButtons()}
          </div>
        )}
        {songUri && <SingleWebplayer songUri={songUri} />}
      </div>
    );
  }
}

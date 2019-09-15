import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.react";
import CountryMap from "./map.js";

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: null
    };
  }

  render() {
    console.log("hello", this.state.currentSong);
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          padding: 16
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Music Map</h1>
          <CountryMap currentSong={this.state.currentSong} />
        </div>
        <Sidebar
          currentSong={this.state.currentSong}
          updateSong={x => this.setState({ currentSong: x })}
          clearSong={() => this.setState({ currentSong: null })}
        />
      </div>
    );
  }
}

export default PageContent;

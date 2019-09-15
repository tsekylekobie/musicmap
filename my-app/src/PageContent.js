import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.react";
import CountryMap from "./map.js";

class PageContent extends React.Component {
  render() {
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
          <CountryMap />
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default PageContent;

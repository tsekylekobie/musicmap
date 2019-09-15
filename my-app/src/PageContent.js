import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.react";

class PageContent extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            padding: 16
          }}
        >
          <h1 style={{ margin: 0 }}>Music Map</h1>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default PageContent;

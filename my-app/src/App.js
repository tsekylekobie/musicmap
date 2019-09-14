import React from "react";
import Sidebar from "./Sidebar.react";
import Playlist from "./Playlist.js";
import "./App.css";

function App() {
  return (
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
      <Playlist
        embedCode={
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
      />
    </div>
  );
}

export default App;

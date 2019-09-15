import React from "react";
import Sidebar from "./Sidebar.react";
import CountryMap from "./map.js";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ float: "left" }}>Music Map</div>
      <Sidebar />
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <CountryMap />
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

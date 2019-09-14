import React from 'react';
import './App.css';
import Playlist from './Playlist.js';
import PlaylistButton from './PlaylistButton.js';

/* Embed code for frequently used playlists. */
const usTop50 = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;
const globalTop50 = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;
const usViral50 = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbKuaTI1Z1Afx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;
const globalViral50 = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLiRSasKsNU9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;

class PageContent extends React.Component {
    constructor() {
        super();
        this.state = {
            embedCode: usTop50
        }
        this.playlistElement = React.createRef();
    }

    /* Update Playlist being displayed on web page. */
    updatePlaylist = (newCode) => {
        console.log("this isn't changing");
        this.setState({embedCode: newCode});
        console.log(this.playlistElement.current.state);
    }

    render() {
        return(
            <div>
                <PlaylistButton playlistName="US Top 50" embedCode={usTop50} updatePlaylist={this.updatePlaylist}/>
                <PlaylistButton playlistName="Global Top 50" embedCode={globalTop50} updatePlaylist={this.updatePlaylist}/>
                <PlaylistButton playlistName="US Viral 50" embedCode={usViral50} updatePlaylist={this.updatePlaylist}/>
                <PlaylistButton playlistName="Global Viral 50" embedCode={globalViral50} updatePlaylist={this.updatePlaylist}/>
                <Playlist ref={this.playlistElement} embedCode={this.state.embedCode}/>
            </div>
        );
    }
}

export default PageContent;
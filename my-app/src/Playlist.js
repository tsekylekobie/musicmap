import React from 'react';
import './App.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            embedCode: props.embedCode
        }
    }

    render() {
        return(
            <div>
                {this.props.embedCode}
            </div>
        );
    }
}

export default Playlist;
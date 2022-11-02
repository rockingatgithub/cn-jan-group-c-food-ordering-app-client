import React, { Component } from 'react';
import socketIO from "socket.io-client";
const socket = socketIO.connect('http://localhost:8000');


class ChatApp extends Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount = () => {
    }
    

    render() {
        return (
            <div>
                Chat Engine
            </div>
        );
    }
}

export default ChatApp;
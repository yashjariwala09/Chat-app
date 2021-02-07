import React, { Component } from 'react'
import ChatInput from '../../Component/ChatInput/ChatInput';
import "./chatWindow.css"

class ChatWindow extends Component {
    render() {
        return (
            <div className="chat-window-wrapper">
                <div className="chat-window-input">
                    <ChatInput />
                </div>
            </div>
        )
    }
}

export default ChatWindow;
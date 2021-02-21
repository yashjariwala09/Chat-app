import React, { Component } from "react";
import ChatInput from "../../Component/ChatInput/ChatInput";
import ChatMessageWindow from "./ChatMessageWindow";
import InfoWindow from "./InfoWindow";
import "./chatWindow.css";

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window-wrapper">
        <div className="chat-window-info" >
          <InfoWindow />
        </div>
        <div className="chat-window-messages">
          <ChatMessageWindow />
        </div>
        <div className="chat-window-input">
          <ChatInput />
        </div>
      </div>
    );
  }
}

export default ChatWindow;

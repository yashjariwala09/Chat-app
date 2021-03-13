import React, { Component } from "react";
import ChatNav from "../ChatNav/ChatNavigationBar";
import ChatWindow from "../ChatWindow/ChatWindow";
class ChatScreen extends Component {
  render() {
    return (
      <>
        <ChatNav />
        <ChatWindow />
      </>
    );
  }
}

export default ChatScreen;
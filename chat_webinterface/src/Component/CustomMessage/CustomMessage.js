import React, { Component } from "react";
import "./message.css"

class Message extends Component {
  render() {
    const { text, name, image, isLatest } = this.props;
    return (
      <div>
        <div style={{ display: "flex" }}>
          <img
            className="user-image"
            src={image}
            alt={"error"}
          />
          <div style={{ marginLeft: "10px" }}>
            <div className="messsage-username">
              {name}
            </div>
            <div
              style={{ color: "#a8abac", marginBottom: isLatest ? 0 : 15 }}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Message;

import React, { Component } from "react";
import userAvatar2 from "../../Assets/pikachu.png";
import "./chatWindow.css";

class InfoWindow extends Component {
  render() {
    return (
      <div
        className="info-wrapper"
      >
        <div className="info-text">
          <img
            src={userAvatar2}
            style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            alt="error"
          />
          <div style={{ marginLeft: "10px" }}>
            Tiren
            <h5 style={{ fontSize: "16px" }}>Active</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoWindow;

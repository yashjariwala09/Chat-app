import React, { Component } from "react";
import SignIn from "./SignInWindow";
import SignUp from "./SignUpWindow";
import styled from "styled-components/macro";

const SignInWrapper = styled.div`
  transform: translateX(
    ${({ show, tab }) => (show ? "0%" : tab !== 0 ? "-200%" : "200%")}
  );
  transition: 1s transform;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const LoginSliderWrapper = styled.div`
  width: 30%;
  background: #0f0f13;
  overflow: hidden;
  position: relative;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWindow: 0,
    };
  }

  chanActiveTab = (tab) => {
    this.setState({ activeWindow: tab });
  };
  render() {
    const { activeWindow } = this.state;
    return (
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <LoginSliderWrapper>
          <SignInWrapper show={activeWindow === 0} tab={activeWindow}>
            <SignIn onChangeTab={() => this.chanActiveTab(1)} />
          </SignInWrapper>
          <SignInWrapper show={activeWindow !== 0} tab={activeWindow}>
            <SignUp onChangeTab={() => this.chanActiveTab(0)} />
          </SignInWrapper>
        </LoginSliderWrapper>
        <div style={{ color: "white" }}></div>
      </div>
    );
  }
}

export default Login;

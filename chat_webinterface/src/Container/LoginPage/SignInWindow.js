import React, { Component } from "react";
import Input from "../../Component/CustomInput/CustomInput";
import { ReactComponent as Email } from "../../Assets/emailBlack.svg";
import { ReactComponent as Lock } from "../../Assets/vpn_keyBlack.svg";
import LoginButton from "../../Component/CustomButtons/LoginButton";
import styled from "styled-components/macro";

import "./login.css";
export const Title = styled.h1`
  font-weight: bolder;
  color: white;
  margin-bottom: 20px;
  font-size: 46px;
`;

export const InputsWrapper = styled.div`
  > * {
    margin: 10px 0;
  }
`;

const SignUpLink = styled.div`
  position: absolute;
  color: #ae9fa0;
  font-weight: bolder;
  bottom: 50px;
  :hover {
    cursor: pointer;
    color: white;
  }
`;
class SignIn extends Component {
  render() {
    const { onChangeTab } = this.props;
    return (
      <div className={"signup-wrapper"} style={{ position: "relative" }}>
        <Title>Sign In</Title>
        <InputsWrapper>
          <Input Icon={Email} label="Email" placeHolder="Enter Email" />
          <Input Icon={Lock} label="Password" placeHolder="Enter Passowrd" />
        </InputsWrapper>
        <div style={{ marginTop: "50px" }}>
          <LoginButton buttonText="SIGN IN" />
        </div>
        <SignUpLink onClick={onChangeTab}>
          Don’t have an account? Sign up
        </SignUpLink>
      </div>
    );
  }
}

export default SignIn;

import React, { Component } from "react";
import Input from "../../Component/CustomInput/CustomInput";
import { ReactComponent as Email } from "../../Assets/emailBlack.svg";
import { ReactComponent as Lock } from "../../Assets/vpn_keyBlack.svg";
import { ReactComponent as Person } from "../../Assets/personBlack.svg";
import LoginButton from "../../Component/CustomButtons/LoginButton";
import { Title, InputsWrapper } from "./SignInWindow";
import BackButton from "../../Component/CustomButtons/BackButon";
import styled from "styled-components/macro";

import "./login.css";

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 50px;
`;

class SignUp extends Component {
  render() {
    const { onChangeTab } = this.props;
    return (
      <div className={"signup-wrapper"}>
        <BackButtonWrapper>
          <BackButton clickAction={onChangeTab} />
        </BackButtonWrapper>
        <Title>Sign up</Title>
        <InputsWrapper>
          <Input Icon={Email} label="Email" placeHolder="Enter Email" />
          <Input
            Icon={Person}
            label="First Name"
            placeHolder="Enter First Name"
          />
          <Input
            Icon={Person}
            label="Last Name"
            placeHolder="Enter Last Name"
          />
          <Input Icon={Lock} label="Password" placeHolder="Enter Passowrd" />
          <Input
            Icon={Lock}
            label="Confirm Password"
            placeHolder="Re-Enter Passowrd"
          />
        </InputsWrapper>
        <div style={{ marginTop: "50px" }}>
          <LoginButton buttonText="SIGN UP" />
        </div>
      </div>
    );
  }
}

export default SignUp;

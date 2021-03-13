import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  width: 100%;
  background: #30307c;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  padding: 5px;

  :hover {
    background: #5050b6;
  }
`;
function LoginButton({ buttonText }) {
  return <Button>{buttonText}</Button>;
}

export default LoginButton;

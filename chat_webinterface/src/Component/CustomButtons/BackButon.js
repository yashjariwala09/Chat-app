import React from "react";
import { ReactComponent as Play } from "../../Assets/play_arrowBlack.svg";
import styled from "styled-components/macro";

const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  justify-content: center;
  width: 50px;
  border-radius: 50px;
  transform: rotate(180deg);
  transition: 0.5s;
  :hover {
    cursor: pointer;
    transform: rotate(540deg);
  }
`;
function BackButton({ clickAction, arrowColor }) {
  return (
    <BackButtonWrapper onClick={clickAction}>
      <Play fill={arrowColor || "black"} width="48" height="48" />
    </BackButtonWrapper>
  );
}

export default BackButton;

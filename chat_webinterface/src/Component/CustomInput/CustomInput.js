import React, { useRef, useState } from "react";
import styled from "styled-components/macro";

const InputWrapper = styled.div`
  background: #0f0f13;
  padding: 5px;
  display: flex;
  align-items: center;
  border: 2px solid ${({ focus }) => (focus ? "#30307c" : "#332E2E")};
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;

const Input = styled.input`
  background: transparent;
  color: white;
  font-weight: 500;
  font-size: 16px;
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
    caret-color: #30307c;
    color: white;
  }
  ::placeholder {
    color: ${({ focus }) => (focus ? "#30307c" : "#332E2E")};
    font-weight: bold;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: ${({ focus }) => (focus ? "#30307c" : "#332E2E")};
  font-size: 14px;
`;

function CustomInput({ vaue, placeHolder, Icon, label }) {
  const [focus, setFocus] = useState(false);
  const textInput = useRef(null);

  return (
    <div style={{ width: "100%" }}>
      {label ? <Label focus={focus}>{label}</Label> : ""}
      <InputWrapper tabIndex="0" ref={textInput} focus={focus}>
        {Icon ? (
          <Icon width={22} height={22} fill={focus ? "#30307c" : "#332E2E"} />
        ) : (
          ""
        )}
        <Input
          placeholder={placeHolder}
          focus={focus}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </InputWrapper>
    </div>
  );
}

export default CustomInput;

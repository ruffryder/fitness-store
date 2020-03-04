import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid transparent;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const facebookSignInStyles = css`
  background-color: #4267b2;
  color: #fff;
  border: 1px solid transparent;
  &:hover {
    background-color: #2a4273;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: 1px solid transparent;
  &:hover {
    background-color: #357ae8;
    border: 1px solid #000;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.isFacebookSignIn) {
    return facebookSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 120px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
  &:disabled {
    background-color: black;
    color: white;
    cursor: not-allowed;
  }
`;

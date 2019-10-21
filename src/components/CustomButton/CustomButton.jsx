import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

function CustomButton(props) {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
}

export default CustomButton;

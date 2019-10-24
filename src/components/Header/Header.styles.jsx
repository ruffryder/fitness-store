import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//used to avoid duplication of styles
const OptionContainerStyles = css`
  padding: 6px 10px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in;
  &:hover {
    border-bottom: 1px solid #000;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    width: 65%;
    font-size: 14px;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

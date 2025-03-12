import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const HeaderWrapper = styled.div`
  background: ${theme.color.white};
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header: React.FC = () => {
  return <HeaderWrapper>This is a header</HeaderWrapper>;
};

export default Header;

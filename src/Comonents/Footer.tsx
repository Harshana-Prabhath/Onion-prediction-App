import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const FooterWrapper = styled.div`
  background: ${theme.color.white};
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 50px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const Footer: React.FC = () => {
  return <FooterWrapper>This is the footer</FooterWrapper>;
};

export default Footer;

import React from "react";

import { Outlet } from "react-router";
import styled from "styled-components";

import Footer from "./Comonents/Footer";
import Header from "./Comonents/Header";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const ContentWrapper = styled.main`
  flex: 1;
  background-color: #fff8e1;
`;

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

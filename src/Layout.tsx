import React from "react";
import { Outlet } from "react-router";
import Header from "./Comonents/Header";
import Footer from "./Comonents/Footer";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const ContentWrapper = styled.main`
  flex: 1;
  background: #f9fafb;
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

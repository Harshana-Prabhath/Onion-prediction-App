import React from "react";
import { Outlet } from "react-router";
import Header from "./Comonents/Header";
import Footer from "./Comonents/Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";

const CustomerLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CustomerLayout;

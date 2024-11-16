// src/layouts/ServiceLayouts.jsx
import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer/Footer";
import Navigation from "../../components/layout/navigation/Navigation";

const { Content } = Layout;

const ServiceLayouts = () => {
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: "20px" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default ServiceLayouts;

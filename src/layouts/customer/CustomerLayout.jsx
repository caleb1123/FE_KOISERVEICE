import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/layout/navigation/Navigation";

const { Content } = Layout;

const CustomerLayouts = () => {
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

export default CustomerLayouts;

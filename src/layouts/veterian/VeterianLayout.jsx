import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import VeterinarianHeader from "../../components/veterian/header/Header";
import VeterinarianSidebar from "../../components/veterian/sidebar/Sidebar";
import "./VeterinarianLayout.scss";

const { Content } = Layout;

const VeterinarianLayout = () => {
  return (
    <Layout className="veterinarian-layout">
      <VeterinarianSidebar />
      <Layout className="veterinarian-content-layout">
        <VeterinarianHeader />
        <Content className="veterinarian-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default VeterinarianLayout;

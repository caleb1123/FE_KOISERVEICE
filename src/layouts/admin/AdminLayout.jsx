import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/header/Header";
import AdminSidebar from "../../components/admin/sidebar/Sidebar";

const { Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Content style={{ padding: "20px", background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

import {
  BarChartOutlined,
  CalendarOutlined,
  DashboardOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MessageOutlined } from "@mui/icons-material";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.scss";

const { Sider, Header, Content, Footer } = Layout;

const AdminLayout = () => {
  return (
    <Layout className="admin-layout">
      <Sider collapsible>
        <div className="logo">
          <Link to="/">KoiVet Admin</Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/admin/users">Quản lý người dùng</Link>
          </Menu.Item>
          <Menu.Item key="chat" icon={<MessageOutlined />}>
            <Link to="/admin/chat">Tin Nhắn</Link>
          </Menu.Item>
          <Menu.Item key="appointments" icon={<CalendarOutlined />}>
            <Link to="/admin/appointments">Quản lý lịch hẹn</Link>
          </Menu.Item>
          <Menu.Item key="reports" icon={<BarChartOutlined />}>
            <Link to="/admin/reports">Báo cáo</Link>
          </Menu.Item>
          <Menu.Item key="content" icon={<FileTextOutlined />}>
            <Link to="/admin/content">Quản lý nội dung</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="admin-header">
          <h2>Trang Quản Trị</h2>
        </Header>
        <Content className="admin-content">
          <Outlet /> {/* Nơi hiển thị các trang con */}
        </Content>
        <Footer className="admin-footer">
          © {new Date().getFullYear()} Koi Veterinary Service Center. All rights
          reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

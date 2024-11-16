import {
  BarChartOutlined,
  CalendarOutlined,
  DashboardOutlined,
  FileTextOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const { Sider } = Layout;

const AdminSidebar = () => {
  return (
    <Sider
      width={250}
      className="admin-sidebar"
      style={{ background: "#001529", color: "#fff", minHeight: "100vh" }}
    >
      <div className="admin-logo">Admin Panel</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        style={{ height: "100%", borderRight: 0, background: "#001529" }}
        theme="dark"
      >
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/admin/users">Quản lý người dùng</Link>
        </Menu.Item>
        <Menu.Item key="chat" icon={<MessageOutlined />}>
          <Link to="/admin/services">Quản lý dịch vụ</Link>
        </Menu.Item>
        {/* <Menu.Item key="appointments" icon={<CalendarOutlined />}>
          <Link to="/admin/appointments">Quản lý lịch hẹn</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="reports" icon={<BarChartOutlined />}>
          <Link to="/admin/reports">Báo cáo</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="content" icon={<FileTextOutlined />}>
          <Link to="/admin/content">Quản lý nội dung</Link>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;

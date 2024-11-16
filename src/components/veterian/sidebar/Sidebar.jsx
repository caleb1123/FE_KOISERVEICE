import {
  CalendarOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const { Sider } = Layout;

const VeterinarianSidebar = () => {
  return (
    <Sider
      width={250}
      className="veterian-sidebar"
      style={{ background: "#001529", color: "#fff", minHeight: "100vh" }}
    >
      <div className="veterian-logo">Admin Panel</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["appointments"]}
        style={{ height: "100%", borderRight: 0, background: "#001529" }}
        theme="dark"
      >
        <Menu.Item key="1" icon={<CalendarOutlined />}>
          <Link to="/veterinarian/appointments">Quản lý lịch hẹn</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/veterinarian/profile">Thông tin cá nhân</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ScheduleOutlined />}>
          <Link to="/veterinarian/schedule">Lịch làm việc</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default VeterinarianSidebar;

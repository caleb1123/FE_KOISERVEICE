import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const VeterinarianHeader = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Tài khoản của tôi
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Cài đặt
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />} onClick={() => handleLogout()}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="admin-header">
      <div className="admin-header-left">Admin Panel</div>
      <div className="admin-header-right">
        <BellOutlined />
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-trigger">
            <UserOutlined />
            <span className="admin-username">{name}</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default VeterinarianHeader;

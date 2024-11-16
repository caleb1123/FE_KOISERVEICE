import { Button, Menu, Dropdown, Layout } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
const Navigation = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const selectedKey = location.pathname; // Lấy pathname hiện tại để làm key cho menu
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
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
      <Menu.Item
        key="2"
        icon={<SettingOutlined />}
        onClick={() => navigate("/history-appoinment")}
      >
        Lịch sử đặt lịch
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />} onClick={() => handleLogout()}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="navigation">
      {/* Logo */}
      {/* <div className="logo">
        <img
          src="/logo192.png"
          alt="Koi Veterinary Center"
          style={{ height: "40px" }}
        />
      </div> */}

      {/* Menu */}
      <Menu mode="horizontal" selectedKeys={[selectedKey]} className="menu">
        <Menu.Item key="/">
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">Giới thiệu</Link>
        </Menu.Item>
        <Menu.Item key="/services">
          <Link to="/services">Dịch vụ</Link>
        </Menu.Item>

        <Menu.SubMenu key="/services/appointment" title="Đặt lịch hẹn">
          {/* <Menu.Item key="/services/online-consultation">
            <Link to="/services/online-consultation">Tư vấn trực tuyến</Link>
          </Menu.Item>
          <Menu.Item key="/services/home-consultation">
            <Link to="/services/home-consultation">Kiểm tra tại nhà</Link>
          </Menu.Item> */}
          <Menu.Item key="/services/disease-treatment">
            <Link to="/services/disease-treatment">Điều trị bệnh</Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* <Menu.Item key="/support">
          <Link to="/support">Hỗ trợ</Link>
        </Menu.Item> */}
      </Menu>

      {/* Nút Đăng ký và Đăng nhập */}
      <div className="auth-buttons">
        {name ? (
          <div style={{ cursor: "pointer" }}>
            <Dropdown overlay={menu}>
              <div className="ant-dropdown-trigger">
                <UserOutlined />
                <span className="admin-username">
                  {name === "null" ? "username" : name}
                </span>
              </div>
            </Dropdown>
          </div>
        ) : (
          <>
            <Button type="default" className="register-btn">
              <Link to="/register">Đăng ký</Link>
            </Button>
            <Button type="primary" className="login-btn">
              <Link to="/login">Đăng nhập</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;

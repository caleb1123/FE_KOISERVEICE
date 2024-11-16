// src/components/admin/Welcome.jsx
import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

const { Title, Paragraph } = Typography;

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <Title level={2}>
          Chào Mừng Đến Với Trang Quản Trị Koi Veterinary Service Center!
        </Title>
        <Paragraph>
          Đây là bảng điều khiển dành cho quản trị viên để quản lý các dịch vụ,
          người dùng, lịch hẹn, báo cáo, và nhiều hơn nữa.
        </Paragraph>
        <Paragraph>
          Bắt đầu bằng cách chọn một trong các mục bên dưới để quản lý hệ thống
          một cách hiệu quả.
        </Paragraph>
        <div className="welcome-buttons">
          <Link to="/admin/dashboard">
            <Button type="primary" size="large">
              Vào Dashboard
            </Button>
          </Link>
          <Link to="/admin/users">
            <Button type="default" size="large">
              Quản Lý Người Dùng
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

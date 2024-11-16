import { FrownOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-page">
      <FrownOutlined className="not-found-icon" />
      <Typography.Title level={1} className="not-found-title">
        404
      </Typography.Title>
      <Typography.Title level={4} className="not-found-subtitle">
        Oops! Trang bạn tìm kiếm không tồn tại.
      </Typography.Title>
      <Typography.Paragraph className="not-found-description">
        Rất tiếc, chúng tôi không thể tìm thấy trang bạn yêu cầu. Vui lòng kiểm
        tra lại đường dẫn hoặc quay về trang chủ.
      </Typography.Paragraph>
      <Button
        type="primary"
        size="large"
        onClick={handleGoHome}
        className="go-home-button"
      >
        Quay về trang chủ
      </Button>
    </div>
  );
};

export default NotFound;

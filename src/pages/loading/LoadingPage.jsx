import { Spin, Typography } from "antd";
import React from "react";
import "./LoadingPage.scss";

const LoadingPage = () => (
  <div className="loading-page">
    <Spin size="large" />
    <Typography.Title level={4} className="loading-text">
      Đang tải, vui lòng chờ...
    </Typography.Title>
  </div>
);

export default LoadingPage;

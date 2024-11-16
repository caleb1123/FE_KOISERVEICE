import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div>
      <Result
        status="success"
        title="Đặt lịch thành công!"
        subTitle="Cảm ơn bạn đã đặt lịch tư vấn. Chúng tôi sẽ gửi thông tin chi tiết qua email cho bạn."
        extra={[
          <Button type="primary" key="home">
            <Link to="/">Về trang chủ</Link>
          </Button>,
          <Button key="services">
            <Link to="/services">Đặt thêm dịch vụ</Link>
          </Button>,
        ]}
      />
    </div>
  );
};

export default SuccessPage;

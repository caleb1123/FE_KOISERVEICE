import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Result
        status="success"
        title="Đặt lịch thành công!"
        subTitle="Chúng tôi đã nhận được yêu cầu đặt lịch kiểm tra của bạn. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể."
        extra={[
          <Button type="primary" key="home" onClick={() => navigate("/")}>
            Về trang chủ
          </Button>,
        ]}
      />
    </div>
  );
};

export default SuccessPage;

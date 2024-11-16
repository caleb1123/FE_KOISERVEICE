import { Card, List } from "antd";
import React from "react";

const SummaryAndConfirmPage = ({
  formDataStepOne,
  formDataStepTwo,
  formDataStepThree,
}) => {
  return (
    <div>
      <h2>Xác nhận thông tin</h2>

      <Card title="Thông tin cá nhân" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Họ và tên:</strong> {formDataStepTwo.name || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Email:</strong> {formDataStepTwo.email || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Số điện thoại:</strong>{" "}
            {formDataStepTwo.phone || "Chưa nhập"}
          </List.Item>
        </List>
      </Card>

      <Card title="Thông tin lịch kiểm tra" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Bác sĩ đã chọn:</strong> {formDataStepOne.doctorId}
          </List.Item>
          <List.Item>
            <strong>Ngày kiểm tra:</strong> {formDataStepOne.dateSelect}
          </List.Item>
          <List.Item>
            <strong>Khung giờ đã chọn:</strong> {formDataStepOne.shiftId}
          </List.Item>
        </List>
      </Card>

      <Card title="Tình trạng bệnh của cá" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Số lượng cá:</strong>{" "}
            {formDataStepThree.fishType || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Triệu chứng:</strong>{" "}
            {formDataStepThree.fishCondition || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Thời gian phát hiện bệnh:</strong>{" "}
            {formDataStepThree.diseaseDuration || "Chưa nhập"}
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default SummaryAndConfirmPage;

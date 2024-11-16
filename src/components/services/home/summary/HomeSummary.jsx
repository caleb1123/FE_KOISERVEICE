import { Card, List } from "antd";
import moment from "moment";
import React from "react";

const SummaryAndConfirmPage = ({
  personalInfo,
  koiPondInfo,
  consultationDetails,
  onConfirm,
}) => {
  return (
    <div>
      <h2>Xác nhận thông tin</h2>

      <Card title="Thông tin cá nhân" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Họ và tên:</strong>{" "}
            {personalInfo.name || <em>Chưa nhập</em>}
          </List.Item>
          <List.Item>
            <strong>Email:</strong> {personalInfo.email || <em>Chưa nhập</em>}
          </List.Item>
          <List.Item>
            <strong>Số điện thoại:</strong>{" "}
            {personalInfo.phone || <em>Chưa nhập</em>}
          </List.Item>
        </List>
      </Card>

      <Card title="Thông tin hồ cá Koi" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Tình trạng hồ cá:</strong>{" "}
            {koiPondInfo.pondCondition || <em>Chưa nhập</em>}
          </List.Item>
          <List.Item>
            <strong>Số lượng cá Koi:</strong>{" "}
            {koiPondInfo.numberOfKoi || <em>Chưa nhập</em>}
          </List.Item>
          <List.Item>
            <strong>Thời gian xây dựng/cải tạo:</strong>{" "}
            {koiPondInfo.constructionTime || <em>Chưa nhập</em>}
          </List.Item>
          <List.Item>
            <strong>Địa chỉ kiểm tra:</strong>{" "}
            {koiPondInfo.address || <em>Chưa nhập</em>}
          </List.Item>
          <List.Item>
            <strong>Ghi chú:</strong> {koiPondInfo.notes || <em>Không có</em>}
          </List.Item>
        </List>
      </Card>

      <Card title="Thông tin lịch kiểm tra" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Bác sĩ đã chọn:</strong>{" "}
            {consultationDetails.selectedDoctor || <em>Chưa chọn</em>}
          </List.Item>
          <List.Item>
            <strong>Ngày kiểm tra:</strong>{" "}
            {consultationDetails.selectedDate ? (
              moment(consultationDetails.selectedDate).format("DD/MM/YYYY")
            ) : (
              <em>Chưa chọn</em>
            )}
          </List.Item>
          <List.Item>
            <strong>Khung giờ đã chọn:</strong>{" "}
            {consultationDetails.timeSlot || <em>Chưa chọn</em>}
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default SummaryAndConfirmPage;

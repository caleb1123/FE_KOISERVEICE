import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Descriptions, Tag } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AppointmentDetails = ({ appointments }) => {
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();

  // Kiểm tra nếu `appointments` là undefined hoặc null
  if (!appointments || appointments.length === 0) {
    return <div>Không có dữ liệu lịch hẹn.</div>;
  }

  // Tìm lịch hẹn theo ID
  const appointment = appointments.find((appt) => appt.id === parseInt(id));

  // Nếu không tìm thấy lịch hẹn, trả về thông báo lỗi
  if (!appointment) {
    return <div>Lịch hẹn không tồn tại</div>;
  }

  // Hàm render trạng thái
  const renderStatusTag = (status) => {
    switch (status) {
      case "Confirmed":
        return (
          <Tag icon={<CheckCircleOutlined />} color="green">
            Đã xác nhận
          </Tag>
        );
      case "Pending":
        return (
          <Tag icon={<ClockCircleOutlined />} color="orange">
            Chờ xác nhận
          </Tag>
        );
      case "Cancelled":
        return (
          <Tag icon={<CloseCircleOutlined />} color="red">
            Đã hủy
          </Tag>
        );
      default:
        return <Tag color="default">Chưa rõ</Tag>;
    }
  };

  return (
    <div className="appointment-details">
      <Card title={`Chi tiết lịch hẹn #${appointment.id}`}>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Người đặt">
            {appointment.name}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày hẹn">
            {appointment.date}
          </Descriptions.Item>
          <Descriptions.Item label="Thời gian">
            {appointment.time}
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái">
            {renderStatusTag(appointment.status)}
          </Descriptions.Item>
          <Descriptions.Item label="Bác sĩ">
            {appointment.doctor || "Chưa có bác sĩ"}
          </Descriptions.Item>
        </Descriptions>
        <Button style={{ marginTop: 20 }} onClick={() => navigate(-1)}>
          Quay lại
        </Button>
      </Card>
    </div>
  );
};

export default AppointmentDetails;

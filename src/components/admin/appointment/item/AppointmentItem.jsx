import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Select, Tag } from "antd";
import React from "react";

const { Option } = Select;

const AppointmentItem = ({
  appointment,
  doctors,
  onAssignDoctor,
  onDelete,
  onView,
}) => {
  const { id, name, date, time, status, doctor } = appointment;

  // Tùy chọn tag trạng thái
  const getStatusTag = (status) => {
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
    <Card
      className="appointment-item"
      title={`Lịch hẹn #${id}`}
      bordered={false}
    >
      <p>
        <strong>Người đặt:</strong> {name}
      </p>
      <p>
        <strong>Ngày hẹn:</strong> {date}
      </p>
      <p>
        <strong>Thời gian:</strong> {time}
      </p>
      <p>
        <strong>Trạng thái:</strong> {getStatusTag(status)}
      </p>
      <p>
        <strong>Bác sĩ:</strong> {doctor ? doctor : "Chưa có"}
      </p>

      {/* Dropdown chọn bác sĩ nếu chưa được chỉ định */}
      {!doctor && (
        <div className="assign-doctor">
          <Select
            placeholder="Chọn bác sĩ"
            onChange={(value) => onAssignDoctor(id, value)}
          >
            {doctors.map((doc) => (
              <Option key={doc.id} value={doc.name}>
                {doc.name} - {doc.specialty}
              </Option>
            ))}
          </Select>
        </div>
      )}

      <div className="actions">
        <Button type="primary" onClick={() => onView(id)}>
          Xem chi tiết
        </Button>
        <Button type="danger" onClick={() => onDelete(id)}>
          Xóa
        </Button>
      </div>
    </Card>
  );
};

export default AppointmentItem;

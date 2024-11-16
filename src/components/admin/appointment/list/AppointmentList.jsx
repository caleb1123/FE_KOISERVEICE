import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppointmentItem from "../item/AppointmentItem";

const AppointmentList = ({
  appointments,
  doctors,
  onAssignDoctor,
  onDelete,
  onView,
}) => {
  const navigate = useNavigate();

  return (
    <Row gutter={[16, 16]}>
      {appointments.map((appointment) => (
        <Col key={appointment.id} span={8}>
          <AppointmentItem
            appointment={appointment}
            doctors={doctors}
            onAssignDoctor={onAssignDoctor}
            onDelete={onDelete}
            onView={(id) => navigate(`/admin/appointments/${id}`)} // Điều hướng tới trang chi tiết
          />
        </Col>
      ))}
    </Row>
  );
};

export default AppointmentList;

import { message } from "antd";
import React, { useState } from "react";
import AppointmentList from "../../../components/admin/appointment/list/AppointmentList";
import "./ManageAppointments.scss";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "Jonny Tran",
      date: "12/10/2024",
      time: "10:00 AM",
      status: "Confirmed",
      doctor: null,
    },
    {
      id: 2,
      name: "John Doe",
      date: "13/10/2024",
      time: "02:00 PM",
      status: "Pending",
      doctor: null,
    },
    {
      id: 3,
      name: "Jane Smith",
      date: "14/10/2024",
      time: "11:00 AM",
      status: "Cancelled",
      doctor: "Dr. Smith",
    },
  ]);

  // Danh sách bác sĩ giả lập
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Koi Specialist" },
    { id: 2, name: "Dr. Adams", specialty: "Fish Health" },
    { id: 3, name: "Dr. Clark", specialty: "Aquatic Biology" },
  ];

  const handleAssignDoctor = (appointmentId, doctorName) => {
    const updatedAppointments = appointments.map((appt) => {
      if (appt.id === appointmentId) {
        return { ...appt, doctor: doctorName };
      }
      return appt;
    });
    setAppointments(updatedAppointments);
    message.success(
      `Đã chỉ định bác sĩ ${doctorName} cho lịch hẹn #${appointmentId}`
    );
  };

  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
    message.success("Đã xóa lịch hẹn thành công.");
  };

  return (
    <div className="manage-appointments">
      <h1>Quản lý lịch hẹn</h1>
      <AppointmentList
        appointments={appointments}
        doctors={doctors}
        onAssignDoctor={handleAssignDoctor}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageAppointments;

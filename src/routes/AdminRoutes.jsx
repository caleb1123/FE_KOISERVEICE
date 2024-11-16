import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import AppointmentDetails from "../pages/admin/appointment/details/AppointmentDetails";
import ManageAppointments from "../pages/admin/appointment/ManageAppointments";
import Dashboard from "../pages/admin/dashboard/DashBoard";
import UsersManage from "../pages/admin/UsersManage";
import ServicesManage from "../components/admin/ServicesManage";

const AdminRoutes = () => {
  const [appointments] = useState([
    {
      id: 1,
      name: "Jonny Tran",
      date: "2024-12-10",
      time: "10:00 AM",
      status: "Confirmed",
      doctor: "Dr. Smith",
    },
    {
      id: 2,
      name: "John Doe",
      date: "2024-12-13",
      time: "02:00 PM",
      status: "Pending",
      doctor: null,
    },
    {
      id: 3,
      name: "Jane Smith",
      date: "2024-12-14",
      time: "11:00 AM",
      status: "Cancelled",
      doctor: "Dr. Adams",
    },
  ]);
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UsersManage />} />
        <Route path="services" element={<ServicesManage />} />
        <Route path="appointments" element={<ManageAppointments />} />
        <Route
          path="appointments/:id"
          element={<AppointmentDetails appointments={appointments} />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;

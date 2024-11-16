import React from "react";
import { Route, Routes } from "react-router-dom";
import VeterinarianLayout from "../layouts/veterian/VeterianLayout";
import VeterinarianAppointments from "../pages/veterinarian/appointment/VeterinarianAppointments";
import VeterinarianProfile from "../pages/veterinarian/profile/VeterinarianProfile";
import VeterinarianSchedule from "../pages/veterinarian/schedule/VeterinarianSchedule";

const VeterinarianRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<VeterinarianLayout />}>
        <Route path="appointments" element={<VeterinarianAppointments />} />
        <Route path="profile" element={<VeterinarianProfile />} />
        <Route path="schedule" element={<VeterinarianSchedule />} />
      </Route>
    </Routes>
  );
};

export default VeterinarianRoutes;

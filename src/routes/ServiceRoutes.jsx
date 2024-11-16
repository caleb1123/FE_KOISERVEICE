import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceLayouts from "../layouts/services/ServiceLayouts";
import DiseaseTreatment from "../pages/services/disease/DiseaseTreatment";
import HomeConsultation from "../pages/services/home/HomeConsultation";
import OnlineConsultation from "../pages/services/online/OnlineConsultation";
import Services from "../pages/services/Services";

const ServicesRoutes = () => {
  return (
    <Routes>
      <Route element={<ServiceLayouts />}>
        <Route index element={<Services />} />
        <Route path="online-consultation" element={<OnlineConsultation />} />
        <Route path="home-consultation" element={<HomeConsultation />} />
        <Route path="disease-treatment" element={<DiseaseTreatment />} />
      </Route>
    </Routes>
  );
};

export default ServicesRoutes;

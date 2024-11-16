import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceLayouts from "../layouts/services/ServiceLayouts";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Homepage from "../pages/home/Homepage";
import Veterian from "../pages/veterian/Veterian";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route element={<ServiceLayouts />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/veterian" element={<Veterian />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;

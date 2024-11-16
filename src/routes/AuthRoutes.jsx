import React, { lazy } from "react";
import { Route } from "react-router-dom";
import ForgetPassword from "../pages/auth/forgot-password/ForgetPassword";

const Login = lazy(() => import("../pages/auth/login/Login"));
const Register = lazy(() => import("../pages/auth/register/Register"));

const AuthRoutes = (
  <>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="forget-password" element={<ForgetPassword />} />
  </>
);

export default AuthRoutes;

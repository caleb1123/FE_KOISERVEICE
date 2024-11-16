import axiosInstance from "./axios";

export const login = async (formData = {}) => {
  const response = await axiosInstance.post("/auth/login", formData);
  return response.data;
};

export const register = async (formData = {}) => {
  const response = await axiosInstance.post("/auth/register", formData);
  return response;
};

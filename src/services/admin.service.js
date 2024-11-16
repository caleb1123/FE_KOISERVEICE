import axiosInstance from "./axios";

export const getAccounts = async () => {
  const response = await axiosInstance.get("/account/accounts");
  return response?.data;
};
export const createAccount = async (formData) => {
  const response = await axiosInstance.post("/account/create", formData);
  return response?.data;
};

export const banAccount = async (userName, checkActive) => {
  const response = axiosInstance.put(`/account/update?userName=${userName}`, {
    active: checkActive,
  });
  return response;
};

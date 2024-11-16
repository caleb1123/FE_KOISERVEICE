import axiosInstance from "./axios";

export const getDoctors = async (date, shiftId) => {
  const response = await axiosInstance.get("account/available", {
    params: {
      date,
      shiftId,
    },
  });
  return response?.data;
};

export const getMyProfileCurrent = async () => {
  const response = await axiosInstance.get("/account/myprofile");
  return response?.data;
};

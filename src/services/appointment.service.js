import axiosInstance from "./axios";

export const getAppointmentMyInfo = async () => {
  const response = await axiosInstance.get(
    "/servicerequest/appointments/myinfor"
  );
  return response;
};
export const creatAppointment = async (formData) => {
  const response = await axiosInstance.post(
    "/servicerequest/appointments/create",
    formData
  );
  return response;
};

export const getAppointmentByDoctor = async (veterinarianId) => {
  const response = await axiosInstance.get(
    `/servicerequest/appointments/veterinarian/{veterinarianId}`,
    { params: { veterinarianId } }
  );
  return response.data ?? [];
};

export const cancelAppointment = async (serviceRequestId) => {
  const response = await axiosInstance.put(
    `servicerequest/appointments/cancelled/{serviceRequestId}?serviceRequestId=${serviceRequestId}`
  );
  return response;
};

export const inprogressAppointment = async (serviceRequestId) => {
  const response = await axiosInstance.put(
    `servicerequest/appointments/inprogress/{serviceRequestId}?serviceRequestId=${serviceRequestId}`
  );
  return response;
};
export const completedAppointment = async (serviceRequestId) => {
  const response = await axiosInstance.put(
    `/servicerequest/appointments/completed/{serviceRequestId}?serviceRequestId=${serviceRequestId}`
  );
  return response;
};

export const createBill = async (formData) => {
  const response = await axiosInstance.post("/bill/create", formData);
  return response;
};

export const createPayment = async (formData) => {
  const response = await axiosInstance.post("/payment/payment", formData);
  return response;
};

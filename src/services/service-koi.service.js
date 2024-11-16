import axiosInstance from "./axios";

export const getServiceKois = async () => {
  const response = await axiosInstance.get("servicekoi/findbyactive/{active}?active=true");
  return response?.data ?? [];
};
export const createServiceKois = async (formData) => {
  const response = await axiosInstance.post("/servicekoi/create", formData);
  return response?.data ?? [];
};

export const updateServiceKoi = async (formData, serviceId) => {
  const response = await axiosInstance.put(
    `/servicekoi/update/{serviceId}?serviceId=${serviceId}`,
    formData
  );
  return response;
};
export const deleteServiceKoi = async (serviceId) => {
  const response = await axiosInstance.delete(
    `/servicekoi/delete/${serviceId}`
  );
  return response;
};

export const DisUnActiceServiceKoi = async (serviceId, active) => {
  const response = await axiosInstance.put(
    `/servicekoi/update/{serviceId}?serviceId=${serviceId}`,
    {
      active: active,
    }
  );
  return response;
};

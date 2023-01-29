import axiosInstance from "./api";

export const getAllCustomersAPI = async () => {
  try {
    const { data } = await axiosInstance.get("/Customers");

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCustomerByIdAPI = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/Customers/${id}`);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createCustomerAPI = async (formData) => {
  try {
    const { data } = await axiosInstance.post(`/Customers`, formData);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCustomerAPI = async (formData) => {
  try {
    console.log(formData)
    const { data } = await axiosInstance.put(
      `/Customers/${formData.customerID}`,
      formData
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCustomerAPI = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/Customers/${id}`);

    return data;
  } catch (err) {
    console.log(err);
  }
};

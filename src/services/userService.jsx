import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";

export const getUserProfile = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getUserProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

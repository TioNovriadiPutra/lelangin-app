import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";

export const getAuctionsByCommunity = async (token, param) => {
  try {
    let url = API_ENDPOINT.getAuctionsByCommunity;

    if (param) {
      url += `/${param}`;
    }

    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAuctionsByCategory = async (token, param) => {
  try {
    let url = API_ENDPOINT.getAuctionsByCategory;

    if (param) {
      url += `/${param}`;
    }

    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

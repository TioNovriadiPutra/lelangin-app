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

export const addAuction = async (token, data) => {
  try {
    const reqBody = new FormData();
    reqBody.append("auctionName", data.auctionName);
    reqBody.append("description", data.description);
    reqBody.append("startBid", data.startBid);
    reqBody.append("buyNow", data.buyNow);
    if (data.categoryId) {
      reqBody.append("categoryId", data.categoryId.value);
    }
  } catch (error) {}
};

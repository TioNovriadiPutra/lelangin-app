import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";
import { generateBlob } from "@utils/helper/generateBlob";

export const getCommunities = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.addCommunity, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addCommunity = async (token, data) => {
  try {
    const reqBody = new FormData();
    reqBody.append("communityName", data.communityName);

    if (data.thumbnail) {
      const blob = await generateBlob(data.thumbnail.uri);
      reqBody.append("thumbnail", blob);
    }

    const response = await axiosInstance.post(
      API_ENDPOINT.addCommunity,
      reqBody,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

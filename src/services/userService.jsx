import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";
import { generateBlob } from "@utils/helper/generateBlob";

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

export const updateUserProfile = async (token, data) => {
  try {
    const reqBody = new FormData();
    reqBody.append("fullName", data.fullName);

    if (data.profilePic !== null) {
      if (typeof data.profilePic === "object") {
        const profilePicBlob = await generateBlob(data.profilePic.uri);

        reqBody.append("profilePic", profilePicBlob);
      }
    }

    const response = await axiosInstance.put(
      API_ENDPOINT.updateUserProfile,
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

export const updateUserAddress = async (token, data) => {
  try {
    const response = await axiosInstance.put(
      API_ENDPOINT.updateUserAddress,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

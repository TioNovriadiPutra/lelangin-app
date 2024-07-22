import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";
import { urlEncodeFormatter } from "@utils/helper/formatter";
import { generateBlob } from "@utils/helper/generateBlob";
import dayjs from "dayjs";

export const getUserAuctions = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.addAuction, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserBids = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.bidAuction, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAuctionsByCommunity = async (token, param) => {
  try {
    let url = API_ENDPOINT.getAuctionsByCommunity;

    if (param) {
      url += `?community=${urlEncodeFormatter(param)}`;
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
      url += `?category=${param}`;
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

export const getAuctionDetail = async (token, id) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.addAuction}/${id}`,
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
    if (data.communityId) {
      reqBody.append("communityId", data.communityId.value);
    }
    if (data.buyNow === true) {
      reqBody.append("buyNowPrice", data.buyNowPrice);
    }
    if (data.timer) {
      reqBody.append(
        "timer",
        dayjs(data.timer.value).format(data.timer.format)
      );
    }

    if (data.auctionImages.length > 0) {
      for (const [index, image] of data.auctionImages.entries()) {
        const blob = await generateBlob(image.uri);

        reqBody.append(`auctionImages[${index}]`, blob);
      }
    }

    const response = await axiosInstance.post(
      API_ENDPOINT.addAuction,
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
    console.log(error);
    throw error.response.data;
  }
};

export const bidAuction = async (token, data, id) => {
  try {
    const response = await axiosInstance.post(
      `${API_ENDPOINT.bidAuction}/${id}`,
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

export const approveAuction = async (token, id) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.bidAuction}/${id}`,
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

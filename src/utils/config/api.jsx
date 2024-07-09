const BASE_PREFIX = "/lelangin/v1";

const AUTH_PREFIX = BASE_PREFIX + "/auth";
const UPLOAD_PREFIX = BASE_PREFIX + "/uploads";
const USER_PREFIX = BASE_PREFIX + "/user";
const COMMUNITY_PREFIX = BASE_PREFIX + "/community";
const CATEGORY_PREFIX = BASE_PREFIX + "/category";

export const API_ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  register: AUTH_PREFIX + "/register",
  logout: AUTH_PREFIX + "/logout",
  getUserUpload: UPLOAD_PREFIX + "/users",
  getCommunityUpload: UPLOAD_PREFIX + "/communities",
  getUserProfile: USER_PREFIX,
  updateUserProfile: USER_PREFIX + "/profile",
  updateUserAddress: USER_PREFIX + "/address",
  addCommunity: COMMUNITY_PREFIX,
  getCategories: CATEGORY_PREFIX,
};

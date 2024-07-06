import { atom, selector } from "recoil";

export const userProfileState = atom({
  key: "userProfileState",
  default: {
    profilePic: null,
    fullName: "",
    address: "",
  },
});

export const userIsLoadingState = atom({
  key: "userIsLoadingState",
  default: false,
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const isLoading = get(userIsLoadingState);
    const data = get(userProfileState);

    return {
      isLoading,
      data,
    };
  },
});

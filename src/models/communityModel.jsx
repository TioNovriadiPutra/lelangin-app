import { atom, selector } from "recoil";

export const communitiesState = atom({
  key: "communitiesState",
  default: [],
});

export const communityIsLoadingState = atom({
  key: "communityIsLoadingState",
  default: false,
});

export const communitiesSelector = selector({
  key: "communitiesSelector",
  get: ({ get }) => {
    const data = get(communitiesState);
    const loading = get(communityIsLoadingState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(communitiesState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(communityIsLoadingState, newValue.loading);
    }
  },
});

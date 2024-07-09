import { atom, selector } from "recoil";

export const auctionsState = atom({
  key: "auctionsState",
  default: [],
});

export const auctionIsLoadingState = atom({
  key: "auctionIsLoadingState",
  default: false,
});

export const auctionsSelector = selector({
  key: "auctionsSelector",
  get: ({ get }) => {
    const data = get(auctionsState);
    const loading = get(auctionIsLoadingState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(auctionsState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(auctionIsLoadingState, newValue.loading);
    }
  },
});

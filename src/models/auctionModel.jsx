import { currencyFormatter } from "@utils/helper/formatter";
import { atom, selector } from "recoil";

export const auctionsState = atom({
  key: "auctionsState",
  default: [],
});

export const auctionDetailState = atom({
  key: "auctionDetailState",
  default: {
    active: false,
    profileId: null,
    header: {
      galleries: [],
      timer: "",
    },
    content: {
      id: null,
      auctionName: "",
      categoryName: "",
      highestBid: currencyFormatter(0),
      description: "",
      buyNowPrice: null,
    },
  },
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

export const auctionDetailSelector = selector({
  key: "auctionDetailSelector",
  get: ({ get }) => {
    const data = get(auctionDetailState);
    const loading = get(auctionIsLoadingState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(auctionDetailState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(auctionIsLoadingState, newValue.loading);
    }
  },
});

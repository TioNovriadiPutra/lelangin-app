import { atom, selector } from "recoil";

export const categoriesState = atom({
  key: "categoriesState",
  default: [],
});

export const categoryIsLoadingState = atom({
  key: "categoryIsLoadingState",
  default: false,
});

export const categoryIdState = atom({
  key: "categoryIdState",
  default: null,
});

export const categoriesSelector = selector({
  key: "categoriesSelector",
  get: ({ get }) => {
    const data = get(categoriesState);
    const loading = get(categoryIsLoadingState);

    return {
      data,
      loading,
    };
  },
  set: ({ set }, newValue) => {
    if (newValue && newValue.data !== undefined) {
      set(categoriesState, newValue.data);
    }

    if (newValue && newValue.loading !== undefined) {
      set(categoryIsLoadingState, newValue.loading);
    }
  },
});

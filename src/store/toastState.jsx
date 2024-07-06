import { atom, selector } from "recoil";

export const toastShowState = atom({
  key: "toastShowState",
  default: false,
});

export const toastTypeState = atom({
  key: "toastTypeState",
  default: null,
});

export const toastMessageState = atom({
  key: "toastMessageState",
  default: null,
});

export const toastSelector = selector({
  key: "toastSelector",
  get: ({ get }) => {
    const show = get(toastShowState);
    const type = get(toastTypeState);
    const message = get(toastMessageState);

    return {
      show,
      type,
      message,
    };
  },
  set: ({ set }, newValue) => {
    set(toastShowState, newValue.show);
    set(toastTypeState, newValue.type);
    set(toastMessageState, newValue.message);
  },
});

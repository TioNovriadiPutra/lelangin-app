import { atom, selector } from "recoil";

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

export const validationErrorState = atom({
  key: "validationErrorState",
  default: null,
});

export const showConfirmationState = atom({
  key: "showConfirmationState",
  default: false,
});

export const confirmationDataState = atom({
  key: "confirmationDataState",
  default: null,
});

export const showDropdownState = atom({
  key: "showDropdownState",
  default: false,
});

export const dropdownDataState = atom({
  key: "dropdownDataState",
  default: null,
});

export const datePickerDataState = atom({
  key: "datePickerDataState",
  default: null,
});

export const confirmationSelector = selector({
  key: "confirmationSelector",
  get: ({ get }) => {
    const show = get(showConfirmationState);
    const data = get(confirmationDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    set(showConfirmationState, newValue.show);
    set(confirmationDataState, newValue.data);
  },
});

export const dropdownSelector = selector({
  key: "dropdownSelector",
  get: ({ get }) => {
    const show = get(showDropdownState);
    const data = get(dropdownDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    set(showDropdownState, newValue.show);
    set(dropdownDataState, newValue.data);
  },
});

export const datePickerSelector = selector({
  key: "datePickerSelector",
  get: ({ get }) => {
    const show = get(showDropdownState);
    const data = get(datePickerDataState);

    return {
      show,
      data,
    };
  },
  set: ({ set }, newValue) => {
    set(showDropdownState, newValue.show);
    set(datePickerDataState, newValue.data);
  },
});

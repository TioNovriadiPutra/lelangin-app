import { datePickerSelector, dropdownSelector } from "@store/pageState";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState } from "recoil";

const useDropdownModal = () => {
  const [dropdown, setDropdown] = useRecoilState(dropdownSelector);
  const [datePicker, setDatePicker] = useRecoilState(datePickerSelector);

  const [date, setDate] = useState(undefined);

  const dropdownAnim = useSharedValue(0);

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(dropdownAnim.value, [0, 1], [0, 442]);

    return {
      height,
    };
  });

  const entry = () => {
    dropdownAnim.value = withTiming(1, { duration: 500 });
    if (datePicker.data) {
      if (datePicker.data.current) {
        setDate(dayjs(datePicker.data.current.value));
      }
    }
  };

  const onHandleClose = () => {
    dropdownAnim.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      setDate(undefined);
      if (dropdown.data) {
        setDropdown({
          show: false,
          data: null,
        });
      } else {
        setDatePicker({
          show: false,
          data: null,
        });
      }
    }, 500);
  };

  useEffect(() => {
    if (dropdown.show) {
      entry();
    }
  }, [dropdown.show]);

  return {
    dropdown,
    datePicker,
    date,
    setDate,
    dropdownAnimatedStyle,
    onHandleClose,
  };
};

export default useDropdownModal;

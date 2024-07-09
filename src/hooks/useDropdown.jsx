import { datePickerSelector, dropdownSelector } from "@store/pageState";
import dayjs from "dayjs";
import { useController } from "react-hook-form";
import { useSetRecoilState } from "recoil";

const useDropdown = (inputData, control) => {
  const setDropdown = useSetRecoilState(dropdownSelector);
  const setDatePicker = useSetRecoilState(datePickerSelector);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandlePress = () => {
    if (inputData.type === "dropdown") {
      setDropdown({
        show: true,
        data: {
          current: field.value,
          onPress: (item) => {
            field.onChange(item);
          },
          items: inputData.items,
        },
      });
    } else {
      setDatePicker({
        show: true,
        data: {
          current: field.value,
          type: inputData.type,
          onPress: (params) => {
            field.onChange(
              dayjs(params.date).format(
                inputData.type === "date" ? "DD-MM-YYYY" : "DD-MM-YYYY HH:mm"
              )
            );
          },
        },
      });
    }
  };

  return {
    field,
    onHandlePress,
  };
};

export default useDropdown;

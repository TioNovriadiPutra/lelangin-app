import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useDropdownModal from "@hooks/useDropdownModal";
import { colors } from "@themes/colors";
import Animated from "react-native-reanimated";
import DropdownList from "@components/molecule/DropdownList";
import DatePicker from "@components/molecule/DatePicker";

const DropdownModal = () => {
  const {
    dropdown,
    datePicker,
    date,
    setDate,
    dropdownAnimatedStyle,
    onHandleClose,
  } = useDropdownModal();

  return (
    <ModalContainer visible={dropdown.show} containerStyles={styles.modal}>
      <TouchableWithoutFeedback onPress={onHandleClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.container, dropdownAnimatedStyle]}>
        {dropdown.data ? (
          <DropdownList dropdownData={dropdown.data} onClose={onHandleClose} />
        ) : datePicker.data ? (
          <DatePicker
            datePickerData={datePicker.data}
            current={date}
            setDate={setDate}
            onClose={onHandleClose}
          />
        ) : null}
      </Animated.View>
    </ModalContainer>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
  },
  backdrop: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.White,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
});

import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useDropdown from "@hooks/useDropdown";

const LelanginDropdown = ({ inputData, control, validationError }) => {
  const { field, onHandlePress } = useDropdown(inputData, control);

  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: validationError ? colors.Danger : colors.Border },
      ]}
      onPress={onHandlePress}
    >
      <Text
        style={[
          styles.input,
          { color: field.value ? colors.Black : colors.Placeholder },
        ]}
      >
        {field.value
          ? inputData.type === "dropdown"
            ? field.value.label
            : field.value
          : inputData.placeholder}
      </Text>
    </Pressable>
  );
};

export default LelanginDropdown;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    flex: 1,
  },
});

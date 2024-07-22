import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const SwicthButton = ({ buttonData, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        active ? styles.containerActive : styles.containerInactive,
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.label, { color: active ? colors.Accent : colors.Label }]}
      >
        {buttonData}
      </Text>
    </TouchableOpacity>
  );
};

export default SwicthButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  containerActive: {
    borderBottomWidth: 4,
    borderBottomColor: colors.Accent,
  },
  containerInactive: {
    borderBottomWidth: 1,
    borderBottomColor: colors.Circle,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
  },
});

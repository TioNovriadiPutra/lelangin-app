import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const DropdownItem = ({ itemData, active, onPress }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: active ? colors.Accent : colors.Circle },
      ]}
      onPress={onPress}
    >
      <Text style={styles.label}>{itemData.label}</Text>

      <View
        style={[
          styles.circle,
          active ? styles.circleActive : styles.circleInactive,
        ]}
      />
    </Pressable>
  );
};

export default DropdownItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 14,
    borderWidth: 1,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  circleActive: {
    borderWidth: 6,
    borderColor: colors.Accent,
  },
  circleInactive: {
    borderWidth: 1,
    borderColor: colors.Circle,
  },
});

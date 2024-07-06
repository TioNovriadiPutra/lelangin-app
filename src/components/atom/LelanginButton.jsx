import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const LelanginButton = ({ buttonData, buttonStyles, onPress }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: buttonData.color },
        buttonStyles,
      ]}
      onPress={onPress}
    >
      <Text style={styles.label}>{buttonData.label}</Text>
    </Pressable>
  );
};

export default LelanginButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.White,
    textAlign: "center",
  },
});

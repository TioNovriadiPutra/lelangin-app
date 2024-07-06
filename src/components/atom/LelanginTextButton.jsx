import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const LelanginTextButton = ({ buttonLabel, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{buttonLabel}</Text>
    </Pressable>
  );
};

export default LelanginTextButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Accent,
  },
});

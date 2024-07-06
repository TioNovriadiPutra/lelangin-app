import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import LelanginButton from "./LelanginButton";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const ConfirmationFooter = ({ buttonData, onPress, onClose }) => {
  return (
    <View style={styles.container}>
      <LelanginButton
        buttonData={buttonData}
        onPress={onPress}
        buttonStyles={styles.button}
      />

      <Pressable onPress={onClose}>
        <Text style={styles.label}>No, cancel this action</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationFooter;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  button: {
    width: 184,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Denied,
    textAlign: "center",
  },
});

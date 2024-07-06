import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import ConfirmationFooter from "@components/atom/ConfirmationFooter";

const ConfirmationBox = ({ confirmationData, onClose }) => {
  const onHandleAccept = () => {
    confirmationData.onPress();
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{confirmationData.title}</Text>

      <Text style={styles.subTitle}>{confirmationData.desc}</Text>

      <ConfirmationFooter
        buttonData={confirmationData.buttonData}
        onClose={onClose}
        onPress={onHandleAccept}
      />
    </View>
  );
};

export default ConfirmationBox;

const styles = StyleSheet.create({
  container: {
    width: 296,
    height: 370,
    backgroundColor: colors.White,
    borderRadius: 14,
    paddingTop: 14,
    paddingBottom: 33,
    paddingHorizontal: 46,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Question,
    textAlign: "center",
  },
});

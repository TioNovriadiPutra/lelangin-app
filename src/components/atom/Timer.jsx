import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuctionItem from "@hooks/useAuctionItem";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const Timer = ({ timerData }) => {
  const { timer, done } = useAuctionItem(timerData);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: done ? colors.Danger : colors.Success },
      ]}
    >
      <Text style={styles.label}>Current End</Text>

      <Text style={styles.time}>{done ? "Ended" : timer}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.White,
  },
  time: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.White,
  },
});

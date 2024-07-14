import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import LelanginCurrencyInput from "./LelanginCurrencyInput";

const BidPrice = ({ control, price }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Current Bid</Text>

        <Text style={styles.value}>{price}</Text>
      </View>

      <LelanginCurrencyInput
        inputData={{
          type: "currency",
          name: "nominal",
          placeholder: "Put Your Nominal",
        }}
        control={control}
        center
      />
    </View>
  );
};

export default BidPrice;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 68,
  },
  container: {
    alignSelf: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 10,
    gap: 5,
    marginBottom: 27,
  },
  title: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Success,
  },
  value: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Black,
  },
});

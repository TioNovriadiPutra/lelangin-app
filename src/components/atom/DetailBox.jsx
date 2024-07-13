import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { currencyFormatter } from "@utils/helper/formatter";
import { fonts } from "@themes/fonts";

const DetailBox = ({ buyNowPrice, highestBid }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { borderRightWidth: 1 }]}>
        <Text style={[styles.label, { color: colors.Accent }]}>Buy Now</Text>

        <Text style={styles.price}>
          {buyNowPrice ? currencyFormatter(buyNowPrice) : "-"}
        </Text>
      </View>

      <View style={[styles.box, { borderLeftWidth: 1 }]}>
        <Text style={[styles.label, { color: colors.Success }]}>
          Highest Bid
        </Text>

        <Text style={styles.price}>{highestBid}</Text>
      </View>
    </View>
  );
};

export default DetailBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 4,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderColor: colors.Circle,
  },
  box: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    borderColor: colors.Circle,
  },
  price: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Black,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
});

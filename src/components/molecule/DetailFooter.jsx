import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import LelanginButton from "@components/atom/LelanginButton";

const DetailFooter = ({ buyNow, onBid }) => {
  return (
    <View style={styles.container}>
      {buyNow && (
        <LelanginButton
          buttonData={{
            label: "Buy Now",
            color: colors.Accent,
          }}
          buttonStyles={styles.buy}
        />
      )}

      <LelanginButton
        buttonData={{
          label: "Place Bid Now",
          color: colors.Main,
        }}
        buttonStyles={styles.bid}
        onPress={onBid}
      />
    </View>
  );
};

export default DetailFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.White,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    shadowColor: colors.Shadow,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 10,
    elevation: 5,
    gap: 14,
  },
  buy: {
    paddingHorizontal: 33.5,
  },
  bid: {
    flex: 1,
  },
});

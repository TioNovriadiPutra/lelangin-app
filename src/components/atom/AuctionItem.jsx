import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { API_ENDPOINT } from "@utils/config/api";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { currencyFormatter } from "@utils/helper/formatter";
import useAuctionItem from "@hooks/useAuctionItem";

const AuctionItem = ({ itemData }) => {
  const { timer, hour } = useAuctionItem(itemData.timer);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getAuctionUpload}/${itemData.thumbnail}`,
        }}
        style={styles.image}
      />

      <View style={styles.desc}>
        <Pressable style={styles.header}>
          <Text
            style={[
              styles.timer,
              { color: hour === 0 ? colors.Danger : colors.Success },
            ]}
          >
            {timer}
          </Text>

          <Text style={styles.name}>{itemData.auctionName}</Text>
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.label}>Highest Bid</Text>

          <Text style={styles.name}>
            {currencyFormatter(itemData.highestBid)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuctionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 138,
    height: 138,
    borderRadius: 20,
  },
  desc: {
    flex: 1,
    gap: 12,
  },
  header: {
    gap: 4,
  },
  name: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Title,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Label,
  },
  timer: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
});

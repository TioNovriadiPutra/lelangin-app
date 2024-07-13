import { StyleSheet, View } from "react-native";
import React from "react";
import DetailTitle from "@components/atom/DetailTitle";
import DetailBox from "@components/atom/DetailBox";
import DetailDesc from "@components/atom/DetailDesc";

const DetailDescription = ({ descriptionData }) => {
  return (
    <View style={styles.container}>
      <DetailTitle
        title={descriptionData.auctionName}
        category={descriptionData.categoryName}
      />

      <DetailBox
        buyNowPrice={descriptionData.buyNowPrice}
        highestBid={descriptionData.highestBid}
      />

      <DetailDesc desc={descriptionData.description} />
    </View>
  );
};

export default DetailDescription;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    gap: 14,
  },
});

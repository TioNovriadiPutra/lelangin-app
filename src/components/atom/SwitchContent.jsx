import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import AuctionListSkeleton from "@components/skeleton/AuctionListSkeleton";
import AuctionList from "@components/molecule/AuctionList";

const WIDTH = Dimensions.get("window").width;

const SwitchContent = ({ loading, itemData }) => {
  return (
    <View style={styles.container}>
      {loading ? <AuctionListSkeleton /> : <AuctionList listData={itemData} />}
    </View>
  );
};

export default SwitchContent;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
  },
});

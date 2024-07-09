import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AuctionItem from "@components/atom/AuctionItem";

const AuctionList = ({ listData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <AuctionItem itemData={item} />}
      />
    </View>
  );
};

export default AuctionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 14,
    paddingBottom: 74,
  },
});

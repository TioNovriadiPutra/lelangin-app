import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CommunityListButton from "@components/atom/CommunityListButton";

const CommunityList = ({ listData }) => {
  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <CommunityListButton buttonData={item} />}
      />
    </View>
  );
};

export default CommunityList;

const styles = StyleSheet.create({
  list: {
    gap: 14,
  },
});

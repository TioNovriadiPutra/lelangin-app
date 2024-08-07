import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { View } from "react-native";

const CommunityListSkeleton = () => {
  const data = Array.from({ length: 10 }, (v, i) => [i + 1, `value${i + 1}`]);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Skeleton width={68} height={68} circle />}
      />
    </View>
  );
};

export default CommunityListSkeleton;

const styles = StyleSheet.create({
  list: {
    gap: 14,
  },
});

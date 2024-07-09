import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CategoryListSkeleton = () => {
  const data = Array.from({ length: 10 }, (v, i) => [i + 1, `value${i + 1}`]);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Skeleton width={121} height={40} style={styles.bar} />
        )}
      />
    </View>
  );
};

export default CategoryListSkeleton;

const styles = StyleSheet.create({
  list: {
    gap: 12,
  },
  bar: {
    borderRadius: 14,
  },
});

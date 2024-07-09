import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CategoryItem from "@components/atom/CategoryItem";

const CategoryList = ({ listData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <CategoryItem itemData={item} index={index} />
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  list: {
    gap: 12,
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { categoryIdState } from "@models/categoryModel";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const CategoryItem = ({ itemData, index }) => {
  const [categoryId, setCategoryId] = useRecoilState(categoryIdState);

  const onHandlePressAll = () => {
    setCategoryId(null);
  };

  const onHandlePress = () => {
    setCategoryId(itemData.id);
  };

  return (
    <View style={styles.container}>
      {index === 0 && (
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor:
                categoryId === null ? colors.Accent : colors.Default,
            },
          ]}
          onPress={onHandlePressAll}
        >
          <Text
            style={[
              styles.label,
              { color: categoryId === null ? colors.White : colors.Inactive },
            ]}
          >
            All
          </Text>
        </Pressable>
      )}

      <Pressable
        style={[
          styles.button,
          {
            backgroundColor:
              categoryId === itemData.id ? colors.Accent : colors.Default,
          },
        ]}
        onPress={onHandlePress}
      >
        <Text
          style={[
            styles.label,
            {
              color:
                categoryId === itemData.id ? colors.White : colors.Inactive,
            },
          ]}
        >
          {itemData.categoryName}
        </Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingVertical: 9.5,
    paddingHorizontal: 19,
    borderRadius: 14,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
});

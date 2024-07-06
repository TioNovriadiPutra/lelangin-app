import { FlatList, StyleSheet } from "react-native";
import React from "react";
import DropdownItem from "@components/atom/DropdownItem";

const DropdownList = ({ dropdownData, onClose }) => {
  const onHandlePick = (item) => {
    dropdownData.onPress(item);
    onClose();
  };

  return (
    <FlatList
      data={dropdownData.items}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <DropdownItem
          itemData={item}
          active={
            dropdownData.current
              ? dropdownData.current.value === item.value
              : false
          }
          onPress={() => onHandlePick(item)}
        />
      )}
    />
  );
};

export default DropdownList;

const styles = StyleSheet.create({
  list: {
    paddingTop: 52,
    gap: 14,
  },
});

import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import SwitchContent from "@components/atom/SwitchContent";
import { useRecoilValue } from "recoil";
import { auctionSwitchIndexState } from "@store/pageState";

const SwitchContentList = ({ listData }) => {
  const current = useRecoilValue(auctionSwitchIndexState);

  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollToIndex({ animated: true, index: current });
  }, [current]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={listData.data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <SwitchContent itemData={item} loading={listData.loading} />
        )}
      />
    </View>
  );
};

export default SwitchContentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
});

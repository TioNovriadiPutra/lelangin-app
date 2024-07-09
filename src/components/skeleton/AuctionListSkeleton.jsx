import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const AuctionListSkeleton = () => {
  const data = Array.from({ length: 10 }, (v, i) => [i + 1, `value${i + 1}`]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Skeleton width={138} height={138} style={styles.image} />

            <View style={styles.desc}>
              <View style={styles.header}>
                <Skeleton width={86} height={21} />

                <Skeleton width={"100%"} height={42} />
              </View>

              <View style={styles.header}>
                <Skeleton width={86} height={21} />

                <Skeleton width={"100%"} height={21} />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AuctionListSkeleton;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  list: {
    gap: 14,
    paddingBottom: 74,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    borderRadius: 14,
  },
  desc: {
    flex: 1,
    gap: 12,
  },
  header: {
    gap: 4,
  },
});

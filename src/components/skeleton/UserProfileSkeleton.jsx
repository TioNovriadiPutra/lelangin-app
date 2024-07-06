import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const UserProfileSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Skeleton width={84} height={84} circle />

        <Skeleton width={86} height={27} />
      </View>

      <Skeleton width={113} height={37} />
    </View>
  );
};

export default UserProfileSkeleton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
  },
  description: {
    alignItems: "center",
    gap: 6,
  },
});

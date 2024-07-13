import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { colors } from "@themes/colors";

const DetailSkeleton = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Skeleton height={408} />

        <View style={styles.content}>
          <View style={styles.header}>
            <Skeleton width={85} height={27} />
            <Skeleton width={66} height={21} />
          </View>

          <View style={styles.box}>
            <View style={[styles.section, { borderRightWidth: 0.5 }]}>
              <Skeleton width={60} height={21} />
              <Skeleton width={"75%"} height={24} />
            </View>

            <View style={[styles.section, { borderLeftWidth: 0.5 }]}>
              <Skeleton width={60} height={21} />
              <Skeleton width={"75%"} height={24} />
            </View>
          </View>

          <View style={styles.desc}>
            <Skeleton width={82} height={21} />
            <Skeleton width={"100%"} height={173} />
          </View>
        </View>
      </ScrollView>

      <Skeleton height={66} style={styles.footer} />
    </View>
  );
};

export default DetailSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 14,
    gap: 14,
  },
  header: {
    gap: 4,
  },
  box: {
    borderBottomWidth: 1,
    borderBottomColor: colors.Circle,
    paddingTop: 4,
    paddingBottom: 11,
    flexDirection: "row",
  },
  section: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    borderColor: colors.Circle,
  },
  desc: {
    gap: 14,
  },
  footer: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
});

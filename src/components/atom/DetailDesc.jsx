import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const DetailDesc = ({ desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>

      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default DetailDesc;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.Label,
  },
  desc: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
});

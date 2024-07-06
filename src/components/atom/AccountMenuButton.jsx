import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const AccountMenuButton = ({ buttonData, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={buttonData.icon} style={styles.icon} />

      <View>
        <Text style={styles.title}>{buttonData.title}</Text>

        <Text style={styles.subTitle}>{buttonData.subTitle}</Text>
      </View>
    </Pressable>
  );
};

export default AccountMenuButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 24,
    gap: 24,
    borderBottomWidth: 1,
    borderColor: colors.Circle,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  subTitle: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.SubTitle,
  },
});

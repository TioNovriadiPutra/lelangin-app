import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const LelanginBackButton = ({ onPress, containerStyles }) => {
  return (
    <Pressable style={[styles.container, containerStyles]} onPress={onPress}>
      <Image source={require("@assets/images/back.png")} style={styles.icon} />
    </Pressable>
  );
};

export default LelanginBackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

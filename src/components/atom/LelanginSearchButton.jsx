import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";

const LelanginSearchButton = ({ destination }) => {
  const nav = useNavigation();

  const onHandleNav = () => {
    nav.navigate(destination);
  };

  return (
    <Pressable style={styles.container} onPress={onHandleNav}>
      <Image
        source={require("@assets/images/search.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default LelanginSearchButton;

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: colors.Search,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    right: 0,
  },
  icon: {
    width: 18,
    height: 18,
  },
});

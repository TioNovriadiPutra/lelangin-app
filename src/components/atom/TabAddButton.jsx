import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";

const TabAddButton = ({ nav }) => {
  const onHandleNav = () => {
    const current =
      nav.getState().routes[0].state.routes[
        nav.getState().routes[0].state.index
      ];
    const currentStart = nav.getState().routes[0].state.routes[0].name;

    if (current) {
      if (current.name === "Community") {
        nav.navigate("CommunityAdd");
      } else {
        nav.navigate("AuctionAdd");
      }
    } else {
      if (currentStart === "Community") {
        nav.navigate("CommunityAdd");
      } else {
        nav.navigate("AuctionAdd");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onHandleNav}>
        <Image
          source={require("@assets/images/plus.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default TabAddButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 34,
    height: 32,
  },
});

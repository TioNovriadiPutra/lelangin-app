import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const FloatingBanner = () => {
  return (
    <LinearGradient
      colors={["#FFCC9C", "#DE4D39"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.quote}>Bid, Win,{`\n`}Thrill, Repeat</Text>

      <Image
        source={require("@assets/images/banner.png")}
        style={styles.banner}
      />
    </LinearGradient>
  );
};

export default FloatingBanner;

const styles = StyleSheet.create({
  container: {
    height: 140,
    borderRadius: 14,
    justifyContent: "flex-end",
    padding: 14,
    marginTop: 10,
  },
  quote: {
    fontFamily: fonts.MerriBold,
    fontSize: 20,
    color: colors.White,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 4,
  },
  banner: {
    width: 192,
    height: 200,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

// background: linear-gradient(103.35deg, #FFCC9C -3.13%, #DE4D39 104.25%);

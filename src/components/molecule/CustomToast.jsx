import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useToast from "@hooks/useToast";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated from "react-native-reanimated";

const CustomToast = () => {
  const { toast, toastAnimatedStyle } = useToast();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor:
            toast.type === "success" ? colors.SuccessLight : colors.DangerLight,
        },
        toastAnimatedStyle,
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              toast.type === "success" ? colors.Success : colors.Danger,
          },
        ]}
      >
        <Image
          source={
            toast.type === "success"
              ? require("@assets/images/success.png")
              : require("@assets/images/failed.png")
          }
        />
      </View>

      <Text style={styles.message}>{toast.message}</Text>
    </Animated.View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 24,
    borderRadius: 14,
    left: 24,
    right: 24,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontFamily: fonts.Medium,
    fontSize: 13,
    color: colors.DarkGrey,
  },
});

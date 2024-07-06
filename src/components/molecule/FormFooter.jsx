import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";

const FormFooter = () => {
  const nav = useNavigation();

  const onHandleNav = () => {
    nav.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Doesn’t have account?</Text>

      <Pressable onPress={onHandleNav}>
        <Text style={styles.label}>Register here</Text>
      </Pressable>
    </View>
  );
};

export default FormFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 9,
    gap: 4,
  },
  question: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Grey,
    textAlign: "center",
  },
  label: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Accent,
    textAlign: "center",
  },
});

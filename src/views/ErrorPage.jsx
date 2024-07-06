import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Text>ErrorPage</Text>
    </View>
  );
};

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import Carousel from "@components/atom/Carousel";
import Timer from "@components/atom/Timer";

const DetailHeader = ({ headerData }) => {
  return (
    <View style={styles.container}>
      <Carousel galleries={headerData.galleries} />

      <Timer timerData={headerData.timer} />
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {
    height: 408,
  },
});

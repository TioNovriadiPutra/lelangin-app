import { StyleSheet, View } from "react-native";
import React from "react";
import { auctionHeader } from "@utils/constant/page";
import SwicthButton from "@components/atom/SwicthButton";
import { useRecoilState } from "recoil";
import { auctionSwitchIndexState } from "@store/pageState";

const SwicthHeader = () => {
  const [switchIndex, setSwitchIndex] = useRecoilState(auctionSwitchIndexState);

  const onHandlePress = (index) => {
    setSwitchIndex(index);
  };

  return (
    <View style={styles.container}>
      {auctionHeader.map((item, index) => (
        <SwicthButton
          key={index.toString()}
          buttonData={item}
          active={switchIndex === index}
          onPress={() => onHandlePress(index)}
        />
      ))}
    </View>
  );
};

export default SwicthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

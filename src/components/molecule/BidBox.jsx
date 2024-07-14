import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import LelanginBackButton from "@components/atom/LelanginBackButton";
import BidPrice from "@components/atom/BidPrice";
import { useForm } from "react-hook-form";
import LelanginButton from "@components/atom/LelanginButton";

const BidBox = ({ bidData, onClose }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      nominal: "",
    },
  });

  return (
    <View style={styles.container}>
      <LelanginBackButton
        containerStyles={styles.back}
        onPress={() => {
          onClose();
          reset();
        }}
      />

      <Text style={styles.title}>Place Bid</Text>

      <BidPrice control={control} price={bidData.highestBid} />

      <LelanginButton
        buttonData={{
          label: "Place Bid",
          color: colors.Main,
        }}
        buttonStyles={styles.button}
        onPress={handleSubmit((data) => bidData.onBid(data))}
      />
    </View>
  );
};

export default BidBox;

const styles = StyleSheet.create({
  container: {
    width: 296,
    backgroundColor: colors.White,
    padding: 24,
    borderRadius: 14,
  },
  back: {
    top: 24,
    left: 24,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
    alignSelf: "center",
    marginBottom: 48,
  },
  button: {
    width: "100%",
  },
});

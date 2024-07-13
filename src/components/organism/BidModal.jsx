import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";

const BidModal = ({ visible }) => {
  return (
    <ModalContainer visible={visible} containerStyles={styles.modal}>
      <Text>BidModal</Text>
    </ModalContainer>
  );
};

export default BidModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});

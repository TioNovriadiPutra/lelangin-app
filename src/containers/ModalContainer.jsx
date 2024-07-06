import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const ModalContainer = ({ children, visible, containerStyles }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={[styles.backdrop, containerStyles]}>{children}</View>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Modal,
  },
});

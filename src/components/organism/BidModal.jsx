import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import BidBox from "@components/molecule/BidBox";
import useBidModal from "@hooks/useBidModal";

const BidModal = () => {
  const { bid, onHandleClose } = useBidModal();

  return (
    <ModalContainer visible={bid.show} containerStyles={styles.modal}>
      {bid.data && <BidBox bidData={bid.data} onClose={onHandleClose} />}
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

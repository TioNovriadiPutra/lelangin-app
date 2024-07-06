import { StyleSheet } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useConfirmationModal from "@hooks/useConfirmationModal";
import ConfirmationBox from "@components/molecule/ConfirmationBox";

const ConfirmationModal = () => {
  const { confirmation, onHandleClose } = useConfirmationModal();

  return (
    <ModalContainer visible={confirmation.show} containerStyles={styles.modal}>
      {confirmation.data && (
        <ConfirmationBox
          confirmationData={confirmation.data}
          onClose={onHandleClose}
        />
      )}
    </ModalContainer>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});

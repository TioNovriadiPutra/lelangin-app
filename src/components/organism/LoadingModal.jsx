import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import { useRecoilValue } from "recoil";
import { isLoadingState } from "@store/pageState";
import { colors } from "@themes/colors";

const LoadingModal = () => {
  const isLoading = useRecoilValue(isLoadingState);

  return (
    <ModalContainer visible={isLoading} containerStyles={styles.modal}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.Accent} />
      </View>
    </ModalContainer>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.White,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import LelanginBackButton from "@components/atom/LelanginBackButton";
import { useNavigation } from "@react-navigation/native";
import LelanginTextButton from "@components/atom/LelanginTextButton";
import LelanginSearchButton from "@components/atom/LelanginSearchButton";

const AppHeader = ({ headerData, onSubmit, type = "normal" }) => {
  const nav = useNavigation();

  const onBack = () => {
    nav.goBack();
  };

  return (
    <View style={styles.container}>
      {headerData.withBack && <LelanginBackButton onPress={onBack} />}

      <Text style={styles.title}>{headerData.title}</Text>

      {headerData.buttonData ? (
        headerData.buttonData.type === "text" ? (
          <LelanginTextButton
            buttonLabel={headerData.buttonData.label}
            onPress={onSubmit}
          />
        ) : headerData.buttonData.type === "search" ? (
          <LelanginSearchButton
            destination={headerData.buttonData.destination}
          />
        ) : null
      ) : null}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
  },
});

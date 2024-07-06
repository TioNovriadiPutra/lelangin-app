import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import LelanginBackButton from "@components/atom/LelanginBackButton";
import { useNavigation } from "@react-navigation/native";
import LelanginTextButton from "@components/atom/LelanginTextButton";

const AppHeader = ({ headerData, onSubmit }) => {
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

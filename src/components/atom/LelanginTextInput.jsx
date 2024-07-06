import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import useTextInput from "@hooks/useTextInput";
import { fonts } from "@themes/fonts";

const LelanginTextInput = ({ inputData, control, validationError }) => {
  const { seePass, field, onHandleSee } = useTextInput(inputData, control);

  return (
    <View
      style={[
        styles.container,
        inputData.type === "password"
          ? styles.containerPassword
          : styles.containerNormal,
        { borderColor: validationError ? colors.Danger : colors.Border },
      ]}
    >
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <TextInput
        value={field.value}
        placeholder={inputData.placeholder}
        placeholderTextColor={colors.Placeholder}
        onChangeText={field.onChange}
        secureTextEntry={inputData.type === "password" ? !seePass : false}
        style={styles.input}
      />

      {inputData.type === "password" && (
        <Pressable onPress={onHandleSee}>
          <Image
            source={
              seePass
                ? require("@assets/images/unsee.png")
                : require("@assets/images/see.png")
            }
          />
        </Pressable>
      )}
    </View>
  );
};

export default LelanginTextInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  containerNormal: {
    paddingVertical: 10,
  },
  containerPassword: {
    paddingTop: 9,
    paddingBottom: 8,
  },
  input: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
    flex: 1,
    outlineStyle: "none",
  },
  error: {
    position: "absolute",
    bottom: -10,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
    backgroundColor: colors.White,
  },
});

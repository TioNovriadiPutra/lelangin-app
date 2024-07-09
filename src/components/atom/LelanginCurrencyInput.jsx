import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useController } from "react-hook-form";
import CurrencyInput from "react-native-currency-input";
import { fonts } from "@themes/fonts";

const LelanginCurrencyInput = ({ inputData, control, validationError }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View
      style={[
        styles.container,
        { borderColor: validationError ? colors.Danger : colors.Border },
      ]}
    >
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <CurrencyInput
        value={field.value}
        placeholder={inputData.placeholder}
        placeholderTextColor={colors.Placeholder}
        onChangeValue={field.onChange}
        prefix="Rp. "
        delimiter="."
        separator=","
        precision={0}
        minValue={0}
        style={styles.input}
      />
    </View>
  );
};

export default LelanginCurrencyInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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

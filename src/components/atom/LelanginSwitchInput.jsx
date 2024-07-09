import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Switch } from "react-native-switch";
import { useController } from "react-hook-form";

const LelanginSwitchInput = ({ inputData, control, validationError }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{inputData.placeholder}</Text>

      <Switch
        value={field.value}
        activeText=""
        inActiveText=""
        barHeight={26}
        circleSize={22}
        circleBorderWidth={0}
        innerCircleStyle={styles.circle}
        backgroundActive={colors.Accent}
        backgroundInactive={colors.Placeholder}
        switchBorderRadius={20}
        switchLeftPx={4}
        switchRightPx={4}
        onValueChange={(val) => field.onChange(val)}
      />
    </View>
  );
};

export default LelanginSwitchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingTop: 11,
    paddingBottom: 10,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  circle: {
    shadowColor: colors.Shadow,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
  },
});

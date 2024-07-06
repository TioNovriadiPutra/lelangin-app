import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import DateTimePicker from "react-native-ui-datepicker";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const DatePicker = ({ datePickerData, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Date</Text>

      <DateTimePicker
        date={datePickerData.current}
        mode="single"
        onChange={(params) => {
          datePickerData.onPress(params);
          onClose();
        }}
        buttonNextIcon={
          <Image source={require("@assets/images/rightArrow.png")} />
        }
        buttonPrevIcon={
          <Image source={require("@assets/images/leftArrow.png")} />
        }
        headerButtonsPosition="right"
        headerTextStyle={styles.headerText}
        calendarTextStyle={styles.calendarText}
        weekDaysTextStyle={styles.weekDaysText}
        selectedItemColor={colors.Accent}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 14,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.Black,
    textAlign: "center",
  },
  headerText: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  calendarText: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
  weekDaysText: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
});

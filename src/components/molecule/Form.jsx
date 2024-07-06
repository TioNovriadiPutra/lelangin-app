import { FlatList, StyleSheet } from "react-native";
import React from "react";
import LelanginTextInput from "@components/atom/LelanginTextInput";
import LelanginDropdown from "@components/atom/LelanginDropdown";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/pageState";
import LelanginProfilePicker from "@components/atom/LelanginProfilePicker";

const Form = ({ formData, control }) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <FlatList
      data={formData}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        if (item.type === "dropdown" || item.type === "date") {
          return (
            <LelanginDropdown
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : null
              }
            />
          );
        } else if (item.type === "profile") {
          return (
            <LelanginProfilePicker
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : null
              }
            />
          );
        }

        return (
          <LelanginTextInput
            inputData={item}
            control={control}
            validationError={
              validationError
                ? validationError.find((error) => error.field === item.name)
                : null
            }
          />
        );
      }}
    />
  );
};

export default Form;

const styles = StyleSheet.create({
  list: {
    gap: 14,
    paddingBottom: 14,
  },
});

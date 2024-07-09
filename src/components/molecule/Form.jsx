import { FlatList, StyleSheet } from "react-native";
import React from "react";
import LelanginTextInput from "@components/atom/LelanginTextInput";
import LelanginDropdown from "@components/atom/LelanginDropdown";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/pageState";
import LelanginProfilePicker from "@components/atom/LelanginProfilePicker";
import LelanginThumbnailPicker from "@components/atom/LelanginThumbnailPicker";
import LelanginGalleryInput from "@components/atom/LelanginGalleryInput";
import LelanginCurrencyInput from "@components/atom/LelanginCurrencyInput";
import LelanginSwitchInput from "@components/atom/LelanginSwitchInput";

const Form = ({ formData, control }) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <FlatList
      data={formData}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        if (
          item.type === "dropdown" ||
          item.type === "date" ||
          item.type === "datetime"
        ) {
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
        } else if (item.type === "thumbnail") {
          return (
            <LelanginThumbnailPicker
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : null
              }
            />
          );
        } else if (item.type === "galleries") {
          return (
            <LelanginGalleryInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : null
              }
            />
          );
        } else if (item.type === "currency") {
          return (
            <LelanginCurrencyInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : null
              }
            />
          );
        } else if (item.type === "switch") {
          return (
            <LelanginSwitchInput
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

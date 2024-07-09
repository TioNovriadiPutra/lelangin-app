import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useImagePicker from "@hooks/useImagePicker";
import { colors } from "@themes/colors";
import { API_ENDPOINT } from "@utils/config/api";
import { fonts } from "@themes/fonts";

const LelanginThumbnailPicker = ({ inputData, control, validationError }) => {
  const { field, pickImage } = useImagePicker(inputData, control);

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          field.value ? styles.buttonFilled : styles.buttonEmpty,
          { borderColor: validationError ? colors.Danger : colors.Placeholder },
        ]}
        onPress={pickImage}
      >
        {validationError && (
          <Text style={styles.error}>{validationError.message}</Text>
        )}

        <Image
          source={
            field.value
              ? {
                  uri:
                    typeof field.value === "string"
                      ? `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getCommunityUpload}/${field.value}`
                      : field.value.uri,
                }
              : require("@assets/images/thumbnail.png")
          }
          style={field.value ? styles.imageFilled : styles.imageEmpty}
        />
      </Pressable>

      <Text style={styles.label}>{inputData.placeholder}</Text>
    </View>
  );
};

export default LelanginThumbnailPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: 258,
    height: 124,
    borderRadius: 18,
  },
  buttonEmpty: {
    borderWidth: 3,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFilled: {
    borderWidth: 1,
  },
  imageEmpty: {
    width: 44.83,
    height: 44.83,
  },
  imageFilled: {
    width: 258,
    height: 124,
    borderRadius: 18,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Placeholder,
    textAlign: "center",
  },
  error: {
    position: "absolute",
    zIndex: 999,
    bottom: -12,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
    backgroundColor: colors.White,
    paddingHorizontal: 5,
  },
});

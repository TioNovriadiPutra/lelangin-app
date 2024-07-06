import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import useImagePicker from "@hooks/useImagePicker";
import { API_ENDPOINT } from "@utils/config/api";

const LelanginProfilePicker = ({ inputData, control, validationError }) => {
  const { field, pickImage } = useImagePicker(inputData, control);

  return (
    <Pressable style={[styles.circle, styles.container]} onPress={pickImage}>
      {field.value && (
        <Image
          source={{
            uri:
              typeof field.value === "string"
                ? `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getUserUpload}/${field.value}`
                : field.value.uri,
          }}
          style={styles.circle}
        />
      )}
    </Pressable>
  );
};

export default LelanginProfilePicker;

const styles = StyleSheet.create({
  circle: {
    width: 84,
    height: 84,
    borderRadius: 50,
  },
  container: {
    alignSelf: "center",
    backgroundColor: colors.Grey,
    marginTop: 18,
    marginBottom: 38,
  },
});

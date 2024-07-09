import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import useGalleryPicker from "@hooks/useGalleryPicker";

const LelanginGalleryInput = ({ inputData, control, validationError }) => {
  const { fields, pickImage, removeImage } = useGalleryPicker(
    inputData,
    control
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          { borderColor: validationError ? colors.Danger : colors.Placeholder },
        ]}
        onPress={pickImage}
      >
        {validationError && (
          <Text style={styles.error}>{validationError.message}</Text>
        )}

        <Image
          source={require("@assets/images/thumbnail.png")}
          style={styles.icon}
        />
      </Pressable>

      <Text style={styles.label}>{inputData.placeholder}</Text>

      <FlatList
        data={fields}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <View style={styles.image}>
            <Pressable
              style={styles.circle1}
              onPress={() => removeImage(index)}
            >
              <View style={styles.circle2}>
                <View style={styles.bar} />
              </View>
            </Pressable>

            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default LelanginGalleryInput;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  button: {
    width: 258,
    height: 124,
    borderRadius: 18,
    borderWidth: 3,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
  icon: {
    width: 44.83,
    height: 44.83,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Placeholder,
    textAlign: "center",
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 8,
  },
  list: {
    gap: 10,
  },
  circle1: {
    position: "absolute",
    zIndex: 999,
    top: -2,
    right: -2,
    padding: 2,
    borderRadius: 50,
    backgroundColor: colors.White,
  },
  circle2: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: colors.Danger,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: 6,
    height: 2,
    backgroundColor: colors.White,
  },
});

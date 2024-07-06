import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { API_ENDPOINT } from "@utils/config/api";

const UserProfileDescription = ({ profileData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {profileData.profilePic && (
          <Image
            source={{
              uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getUserUpload}/${profileData.profilePic}`,
            }}
            style={styles.circle}
          />
        )}
      </View>

      <Text style={styles.name}>{profileData.fullName}</Text>
    </View>
  );
};

export default UserProfileDescription;

const styles = StyleSheet.create({
  container: {
    gap: 6,
    alignItems: "center",
  },
  circle: {
    width: 84,
    height: 84,
    borderRadius: 50,
    backgroundColor: colors.Grey,
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.Black,
    textAlign: "center",
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import UserProfileDescription from "@components/atom/UserProfileDescription";
import LelanginButton from "@components/atom/LelanginButton";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";

const UserProfile = ({ profileData }) => {
  const nav = useNavigation();

  const onHandleEdit = () => {
    nav.navigate("AccountEdit");
  };

  return (
    <View style={styles.container}>
      <UserProfileDescription profileData={profileData} />

      <LelanginButton
        buttonData={{
          label: "Edit Profile",
          color: colors.Main,
        }}
        buttonStyles={styles.button}
        onPress={onHandleEdit}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
  },
  button: {
    width: 113,
  },
});

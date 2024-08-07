import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { API_ENDPOINT } from "@utils/config/api";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useSetRecoilState } from "recoil";
import { communityIdState } from "@models/communityModel";

const CommunityListButton = ({ buttonData }) => {
  const setCommunityId = useSetRecoilState(communityIdState);

  const onHandlePress = () => {
    setCommunityId(buttonData.communityName);
  };

  return (
    <Pressable style={styles.container} onPress={onHandlePress}>
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getCommunityUpload}/${buttonData.thumbnail}`,
        }}
        style={styles.image}
      />

      <Text style={styles.text} numberOfLines={1}>
        {buttonData.communityName}
      </Text>
    </Pressable>
  );
};

export default CommunityListButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 68,
    gap: 5,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 50,
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 11,
    color: colors.Community,
  },
});

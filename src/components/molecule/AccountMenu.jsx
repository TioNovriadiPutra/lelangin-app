import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { accountMenuData } from "@utils/constant/page";
import AccountMenuButton from "@components/atom/AccountMenuButton";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";
import useAuthController from "@controllers/authController";
import { useSetRecoilState } from "recoil";
import { confirmationSelector } from "@store/pageState";

const AccountMenu = () => {
  const setConfirmation = useSetRecoilState(confirmationSelector);

  const { logoutService } = useAuthController();

  const nav = useNavigation();

  const onHandlePress = (dest) => {
    if (dest) {
      nav.navigate(dest);
    } else {
      setConfirmation({
        show: true,
        data: {
          title: "Log Out",
          desc: "Are you sure you want to log out? We'll miss you!",
          buttonData: {
            label: "Logout",
            color: colors.Main,
          },
          onPress: () => logoutService(),
        },
      });
    }
  };

  return (
    <FlatList
      data={accountMenuData}
      keyExtractor={(_, index) => index.toString()}
      style={styles.list}
      renderItem={({ item }) => (
        <AccountMenuButton
          buttonData={item}
          onPress={() => onHandlePress(item.dest)}
        />
      )}
    />
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  list: {
    borderTopWidth: 1,
    borderColor: colors.Circle,
  },
});

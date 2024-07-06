import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "@routes/AuthRoute";
import ErrorPage from "@views/ErrorPage";
import useStarter from "@hooks/useStarter";
import { linking } from "@utils/config/linking";
import CustomToast from "@components/molecule/CustomToast";
import DropdownModal from "@components/organism/DropdownModal";
import LoadingModal from "@components/organism/LoadingModal";
import AppRoute from "@routes/AppRoute";
import ConfirmationModal from "@components/organism/ConfirmationModal";

const AppNav = () => {
  const { isLoggedIn, fontsLoaded, isMobile } = useStarter();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <LoadingModal />
      <DropdownModal />
      <ConfirmationModal />

      {Platform.OS === "web" ? (
        isMobile ? (
          <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
          >
            {isLoggedIn ? <AppRoute /> : <AuthRoute />}
          </NavigationContainer>
        ) : (
          <ErrorPage />
        )
      ) : (
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading...</Text>}
        >
          {isLoggedIn ? <AppRoute /> : <AuthRoute />}
        </NavigationContainer>
      )}

      <CustomToast />
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

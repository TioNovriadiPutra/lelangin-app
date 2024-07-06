import { colors } from "@themes/colors";
import { Stack, Tab } from "@utils/constant/navigation";
import Account from "@views/app/account/Account";
import AccountEdit from "@views/app/account/AccountEdit";
import Auction from "@views/app/auction/Auction";
import Community from "@views/app/community/Community";
import Home from "@views/app/home/Home";
import React from "react";
import { Image, StyleSheet } from "react-native";

const AppRoute = () => {
  return (
    <Stack.Navigator initialRouteName="MainRoute">
      <Stack.Screen
        name="MainRoute"
        component={MainRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          backgroundColor: colors.White,
          height: 60,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          shadowColor: colors.Shadow,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.1,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/homeActive.png")
                    : require("@assets/images/homeInactive.png")
                }
                style={styles.icon}
              />
            );
          } else if (route.name === "Community") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/communityActive.png")
                    : require("@assets/images/communityInactive.png")
                }
                style={styles.icon}
              />
            );
          } else if (route.name === "Auction") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/auctionActive.png")
                    : require("@assets/images/auctionInactive.png")
                }
                style={styles.icon}
              />
            );
          } else if (route.name === "Account") {
            return (
              <Image
                source={
                  focused
                    ? require("@assets/images/accountActive.png")
                    : require("@assets/images/accountInactive.png")
                }
                style={styles.icon}
              />
            );
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Auction"
        component={Auction}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppRoute;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

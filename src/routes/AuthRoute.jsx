import { Stack } from "@utils/constant/navigation";
import Login from "@views/auth/Login";
import Register from "@views/auth/Register";
import React from "react";

const AuthRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  authTokenState,
  isLoggedInSelector,
  userIdState,
} from "@store/authState";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useStarter = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const setAuthToken = useSetRecoilState(authTokenState);
  const setUserId = useSetRecoilState(userIdState);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("@assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("@assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("@assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("@assets/fonts/Poppins-Light.ttf"),
    "Merriweather-Bold": require("@assets/fonts/Merriweather-Bold.ttf"),
  });

  const isMobile = useMediaQuery({
    maxWidth: 480,
  });

  const checkIsLoggedIn = async () => {
    const token = await AsyncStorage.getItem("@authToken");
    const userId = await AsyncStorage.getItem("@userId");

    if (token) {
      setAuthToken(token);
      setUserId(JSON.parse(userId));
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return {
    isLoggedIn,
    fontsLoaded,
    isMobile,
  };
};

export default useStarter;

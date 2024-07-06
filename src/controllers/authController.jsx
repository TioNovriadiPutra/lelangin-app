import useController from "@hooks/useController";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { login, logout, register } from "@services/authService";

const useAuthController = () => {
  const {
    authToken,
    setAuthToken,
    onHandleMutate,
    onHandleSuccess,
    onHandleError,
    onHandleSettled,
  } = useController();

  const nav = useNavigation();

  const loginService = async (data) => {
    onHandleMutate();

    await login(data)
      .then((response) => {
        setAuthToken(response.token.token);
        AsyncStorage.setItem("@authToken", response.token.token);
        onHandleSuccess(response.message);
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  const registerService = async (data) => {
    onHandleMutate();

    await register(data)
      .then((response) => {
        onHandleSuccess(response.message);
        nav.navigate("Login");
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  const logoutService = async () => {
    onHandleMutate();

    await logout(authToken)
      .then((response) => {
        setAuthToken(null);
        AsyncStorage.removeItem("@authToken");
        onHandleSuccess(response.message);
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  return {
    loginService,
    registerService,
    logoutService,
  };
};

export default useAuthController;

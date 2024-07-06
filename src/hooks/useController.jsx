import AsyncStorage from "@react-native-async-storage/async-storage";
import { authTokenState } from "@store/authState";
import { isLoadingState, validationErrorState } from "@store/pageState";
import { toastSelector } from "@store/toastState";
import { useRecoilState, useSetRecoilState } from "recoil";

const useController = () => {
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setValidationError = useSetRecoilState(validationErrorState);
  const setToast = useSetRecoilState(toastSelector);

  const [authToken, setAuthToken] = useRecoilState(authTokenState);

  const onHandleMutate = () => {
    setIsLoading(true);
    setValidationError(null);
  };

  const onHandleSuccess = (message) => {
    setToast({ show: true, type: "success", message });
  };

  const onHandleError = async (error) => {
    if (error.errors) {
      setAuthToken(null);
      await AsyncStorage.removeItem("@authToken");
    } else if (error.error.status === 422) {
      setValidationError(error.error.message);
    } else {
      setToast({ show: true, type: "failed", message: error.error.message });
    }
  };

  const onHandleSettled = () => {
    setIsLoading(false);
  };

  return {
    authToken,
    setAuthToken,
    onHandleMutate,
    onHandleSuccess,
    onHandleError,
    onHandleSettled,
  };
};

export default useController;

import useController from "@hooks/useController";
import { userIsLoadingState, userProfileState } from "@models/userModel";
import { useNavigation } from "@react-navigation/native";
import {
  getUserProfile,
  updateUserAddress,
  updateUserProfile,
} from "@services/userService";
import { editAccountForm, editAddressForm } from "@utils/constant/form";
import { useSetRecoilState } from "recoil";

const useUserController = () => {
  const setUser = useSetRecoilState(userProfileState);
  const setIsLoading = useSetRecoilState(userIsLoadingState);

  const nav = useNavigation();

  const {
    authToken,
    onHandleSuccess,
    onHandleError,
    onHandleMutate,
    onHandleSettled,
  } = useController();

  const getUserProfileService = async () => {
    setIsLoading(true);

    await getUserProfile(authToken)
      .then((response) => {
        setUser({
          profilePic: response.data.profile_pic,
          fullName: response.data.full_name,
          address: response.data.address,
        });

        Object.assign(editAccountForm.defaultValues, {
          profilePic: response.data.profile_pic,
          fullName: response.data.full_name,
        });

        Object.assign(editAddressForm.defaultValues, {
          address: response.data.address,
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateUserProfileService = async (data) => {
    onHandleMutate();

    await updateUserProfile(authToken, data)
      .then((response) => {
        onHandleSuccess(response.message);
        nav.navigate("MainRoute", {
          screen: "Account",
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  const updateUserAddressService = async (data) => {
    onHandleMutate();

    await updateUserAddress(authToken, data)
      .then((response) => {
        onHandleSuccess(response.message);
        nav.navigate("MainRoute", {
          screen: "Account",
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  return {
    getUserProfileService,
    updateUserProfileService,
    updateUserAddressService,
  };
};

export default useUserController;

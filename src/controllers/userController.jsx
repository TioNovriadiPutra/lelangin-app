import useController from "@hooks/useController";
import { userIsLoadingState, userProfileState } from "@models/userModel";
import { getUserProfile } from "@services/userService";
import { useSetRecoilState } from "recoil";

const useUserController = () => {
  const setUser = useSetRecoilState(userProfileState);
  const setIsLoading = useSetRecoilState(userIsLoadingState);

  const { authToken, onHandleSuccess, onHandleError } = useController();

  const getUserProfileService = async () => {
    setIsLoading(true);

    await getUserProfile(authToken)
      .then((response) => {
        setUser({
          profilePic: response.data.profile_pic,
          fullName: response.data.full_name,
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

  return {
    getUserProfileService,
  };
};

export default useUserController;

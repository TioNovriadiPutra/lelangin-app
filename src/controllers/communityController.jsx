import useController from "@hooks/useController";
import { communitiesSelector } from "@models/communityModel";
import { useNavigation } from "@react-navigation/native";
import { addCommunity, getCommunities } from "@services/communityService";
import { useSetRecoilState } from "recoil";

const useCommunityController = () => {
  const setCommunities = useSetRecoilState(communitiesSelector);

  const nav = useNavigation();

  const {
    authToken,
    onHandleMutate,
    onHandleSuccess,
    onHandleError,
    onHandleSettled,
  } = useController();

  const getCommunitiesService = async () => {
    setCommunities({ loading: true });

    await getCommunities(authToken)
      .then((response) => {
        setCommunities({
          data: response.data.map((item) => {
            return {
              id: item.id,
              communityName: item.community_name,
              thumbnail: item.thumbnail,
            };
          }),
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        setCommunities({ loading: false });
      });
  };

  const addCommunityService = async (data) => {
    onHandleMutate();

    await addCommunity(authToken, data)
      .then((response) => {
        nav.navigate("MainRoute", {
          screen: "Community",
        });

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
    getCommunitiesService,
    addCommunityService,
  };
};

export default useCommunityController;

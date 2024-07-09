import useController from "@hooks/useController";
import { auctionsSelector } from "@models/auctionModel";
import { categoryIdState } from "@models/categoryModel";
import { communityIdState } from "@models/communityModel";
import {
  getAuctionsByCategory,
  getAuctionsByCommunity,
} from "@services/auctionService";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useAuctionController = () => {
  const setAuctions = useSetRecoilState(auctionsSelector);
  const communityId = useRecoilValue(communityIdState);
  const categoryId = useRecoilValue(categoryIdState);

  const { authToken, onHandleError } = useController();

  const getAuctionsByCommunityService = async () => {
    setAuctions({ loading: true });

    await getAuctionsByCommunity(authToken, communityId)
      .then((response) => {
        setAuctions({
          data: response.data.map((item) => {
            return {
              id: item.id,
              auctionName: item.auction_name,
              thumbnail: item.galleries[0],
              highestBid: item.highest_bid,
              timer: item.timer,
            };
          }),
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        setAuctions({ loading: false });
      });
  };

  const getAuctionsByCategoryService = async () => {
    setAuctions({ loading: true });

    await getAuctionsByCategory(authToken, categoryId)
      .then((response) => {
        setAuctions({
          data: response.data.map((item) => {
            return {
              id: item.id,
              auctionName: item.auction_name,
              thumbnail: item.galleries[0],
              highestBid: item.highest_bid,
              timer: item.timer,
            };
          }),
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        setAuctions({ loading: false });
      });
  };

  return {
    getAuctionsByCommunityService,
    getAuctionsByCategoryService,
  };
};

export default useAuctionController;

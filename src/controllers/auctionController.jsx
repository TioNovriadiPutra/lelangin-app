import useController from "@hooks/useController";
import { auctionDetailSelector, auctionsSelector } from "@models/auctionModel";
import { categoryIdState } from "@models/categoryModel";
import { communityIdState } from "@models/communityModel";
import { useNavigation } from "@react-navigation/native";
import {
  addAuction,
  getAuctionDetail,
  getAuctionsByCategory,
  getAuctionsByCommunity,
} from "@services/auctionService";
import { currencyFormatter } from "@utils/helper/formatter";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useAuctionController = () => {
  const setAuctions = useSetRecoilState(auctionsSelector);
  const setAuctionDetail = useSetRecoilState(auctionDetailSelector);
  const communityId = useRecoilValue(communityIdState);
  const categoryId = useRecoilValue(categoryIdState);

  const nav = useNavigation();

  const {
    authToken,
    onHandleMutate,
    onHandleSuccess,
    onHandleError,
    onHandleSettled,
  } = useController();

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

  const getAuctionDetailService = async (id) => {
    setAuctionDetail({ loading: true });

    await getAuctionDetail(authToken, id)
      .then((response) => {
        setAuctionDetail({
          data: {
            header: {
              galleries: response.data.galleries,
              timer: response.data.timer,
            },
            content: {
              id: response.data.id,
              auctionName: response.data.auction_name,
              categoryName: response.data.category_name,
              highestBid: currencyFormatter(response.data.highest_bid),
              description: response.data.description,
              buyNowPrice: response.data.buy_now_price,
            },
          },
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        setAuctionDetail({ loading: false });
      });
  };

  const addAuctionService = async (data) => {
    onHandleMutate();

    await addAuction(authToken, data)
      .then((response) => {
        nav.navigate("MainRoute", {
          screen: "Auction",
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
    getAuctionsByCommunityService,
    getAuctionsByCategoryService,
    getAuctionDetailService,
    addAuctionService,
  };
};

export default useAuctionController;

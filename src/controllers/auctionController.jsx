import useController from "@hooks/useController";
import {
  auctionDetailSelector,
  auctionsSelector,
  userAuctionsSelector,
} from "@models/auctionModel";
import { categoryIdState } from "@models/categoryModel";
import { communityIdState } from "@models/communityModel";
import { useNavigation } from "@react-navigation/native";
import {
  addAuction,
  approveAuction,
  bidAuction,
  getAuctionDetail,
  getAuctionsByCategory,
  getAuctionsByCommunity,
  getUserAuctions,
  getUserBids,
} from "@services/auctionService";
import { bidSelector, confirmationSelector } from "@store/pageState";
import { currencyFormatter } from "@utils/helper/formatter";
import dayjs from "dayjs";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useAuctionController = () => {
  const setAuctions = useSetRecoilState(auctionsSelector);
  const setAuctionDetail = useSetRecoilState(auctionDetailSelector);
  const setUserAuctions = useSetRecoilState(userAuctionsSelector);
  const setBid = useSetRecoilState(bidSelector);
  const setConfirmation = useSetRecoilState(confirmationSelector);
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

  const getUserAuctionsService = async () => {
    setUserAuctions({ loading: true });

    const finalData = [];

    await getUserAuctions(authToken)
      .then((response) => {
        const map = response.data.map((item) => {
          return {
            id: item.id,
            auctionName: item.auction_name,
            thumbnail: item.galleries[0],
            highestBid: item.highest_bid,
            timer: item.timer,
          };
        });

        finalData.push(map);
      })
      .catch((error) => {
        onHandleError(error);
      });

    await getUserBids(authToken)
      .then((response) => {
        const map = response.data.map((item) => {
          return {
            id: item.id,
            auctionName: item.auction_name,
            thumbnail: item.galleries[0],
            highestBid: item.highest_bid,
            timer: item.timer,
          };
        });

        finalData.push(map);
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        setUserAuctions({ loading: false });
      });

    setUserAuctions({ data: finalData });
  };

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
            active: dayjs(response.data.timer).diff(dayjs()) < 0 ? false : true,
            profileId: response.data.profile_id,
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

  const bidAuctionService = async (data, id) => {
    setBid({ show: false, data: null });
    onHandleMutate();

    await bidAuction(authToken, data, id)
      .then((response) => {
        onHandleSuccess(response.message);
        nav.navigate("MainRoute", {
          screen: "Auction",
        });
      })
      .catch((error) => {
        onHandleError(error);
      })
      .finally(() => {
        onHandleSettled();
      });
  };

  const approveAuctionService = async (id) => {
    setConfirmation({ show: false, data: null });
    onHandleMutate();

    await approveAuction(authToken, id)
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
    getUserAuctionsService,
    getAuctionsByCommunityService,
    getAuctionsByCategoryService,
    getAuctionDetailService,
    addAuctionService,
    bidAuctionService,
    approveAuctionService,
  };
};

export default useAuctionController;

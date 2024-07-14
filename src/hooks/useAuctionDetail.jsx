import useAuctionController from "@controllers/auctionController";
import { auctionDetailSelector } from "@models/auctionModel";
import { useIsFocused } from "@react-navigation/native";
import { userIdState } from "@store/authState";
import { bidSelector, confirmationSelector } from "@store/pageState";
import { colors } from "@themes/colors";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const useAuctionDetail = (params) => {
  const { id } = params;

  const [auctionDetail, setAuctionDetail] = useRecoilState(
    auctionDetailSelector
  );
  const userId = useRecoilValue(userIdState);
  const setBid = useSetRecoilState(bidSelector);
  const setConfirmation = useSetRecoilState(confirmationSelector);

  const isFocused = useIsFocused();

  const { getAuctionDetailService, bidAuctionService, approveAuctionService } =
    useAuctionController();

  const onHandleBid = () => {
    if (userId === auctionDetail.data.profileId) {
      setConfirmation({
        show: true,
        data: {
          title: "Approve Auction",
          desc: "Process this auction?",
          buttonData: {
            label: "Confirm",
            color: colors.Main,
          },
          onPress: () => {
            approveAuctionService(auctionDetail.data.content.id);
          },
        },
      });
    } else {
      setBid({
        show: true,
        data: {
          highestBid: auctionDetail.data.content.highestBid,
          onBid: (data) => {
            bidAuctionService(data, id);
          },
        },
      });
    }
  };

  useEffect(() => {
    if (isFocused) {
      getAuctionDetailService(id);
    } else {
      setAuctionDetail({
        data: null,
      });
    }
  }, [isFocused]);

  return {
    auctionDetail,
    mine: auctionDetail.data ? auctionDetail.data.profileId === userId : false,
    onHandleBid,
  };
};

export default useAuctionDetail;

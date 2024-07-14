import useAuctionController from "@controllers/auctionController";
import { auctionDetailSelector } from "@models/auctionModel";
import { useIsFocused } from "@react-navigation/native";
import { bidSelector } from "@store/pageState";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const useAuctionDetail = (params) => {
  const { id } = params;

  const [auctionDetail, setAuctionDetail] = useRecoilState(
    auctionDetailSelector
  );
  const setBid = useSetRecoilState(bidSelector);

  const isFocused = useIsFocused();

  const { getAuctionDetailService, bidAuctionService } = useAuctionController();

  const onHandleBid = () => {
    setBid({
      show: true,
      data: {
        highestBid: auctionDetail.data.content.highestBid,
        onBid: (data) => {
          bidAuctionService(data, id);
        },
      },
    });
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
    onHandleBid,
  };
};

export default useAuctionDetail;

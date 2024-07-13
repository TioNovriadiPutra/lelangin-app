import useAuctionController from "@controllers/auctionController";
import { auctionDetailSelector } from "@models/auctionModel";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useAuctionDetail = (params) => {
  const { id } = params;

  const [showModal, setShowModal] = useState(false);

  const [auctionDetail, setAuctionDetail] = useRecoilState(
    auctionDetailSelector
  );

  const isFocused = useIsFocused();

  const { getAuctionDetailService } = useAuctionController();

  const onHandleBid = () => {
    setShowModal(true);
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
    showModal,
    auctionDetail,
    onHandleBid,
  };
};

export default useAuctionDetail;

import { bidSelector } from "@store/pageState";
import { useRecoilState } from "recoil";

const useBidModal = () => {
  const [bid, setBid] = useRecoilState(bidSelector);

  const onHandleClose = () => {
    setBid({ show: false, data: null });
  };

  return {
    bid,
    onHandleClose,
  };
};

export default useBidModal;

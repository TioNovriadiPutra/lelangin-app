import React from "react";
import MainContainer from "@containers/MainContainer";
import DetailSkeleton from "@components/skeleton/DetailSkeleton";
import DetailFooter from "@components/molecule/DetailFooter";
import DetailContent from "@components/organism/DetailContent";
import BidModal from "@components/organism/BidModal";
import useAuctionDetail from "@hooks/useAuctionDetail";

const AuctionDetail = ({ route }) => {
  const { showModal, auctionDetail, onHandleBid } = useAuctionDetail(
    route.params
  );

  return (
    <MainContainer withPadding={false}>
      {auctionDetail.loading ? (
        <DetailSkeleton />
      ) : (
        <>
          <DetailContent contentData={auctionDetail.data} />

          <DetailFooter
            buyNow={auctionDetail.data.content.buyNowPrice}
            onBid={onHandleBid}
          />

          <BidModal visible={showModal} />
        </>
      )}
    </MainContainer>
  );
};

export default AuctionDetail;

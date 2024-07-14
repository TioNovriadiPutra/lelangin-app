import React from "react";
import MainContainer from "@containers/MainContainer";
import DetailSkeleton from "@components/skeleton/DetailSkeleton";
import DetailFooter from "@components/molecule/DetailFooter";
import DetailContent from "@components/organism/DetailContent";
import useAuctionDetail from "@hooks/useAuctionDetail";

const AuctionDetail = ({ route }) => {
  const { auctionDetail, mine, onHandleBid } = useAuctionDetail(route.params);

  return (
    <MainContainer withPadding={false}>
      {auctionDetail.loading ? (
        <DetailSkeleton />
      ) : (
        <>
          <DetailContent contentData={auctionDetail.data} />

          {auctionDetail.data.active && (
            <DetailFooter
              buyNow={auctionDetail.data.content.buyNowPrice}
              onBid={onHandleBid}
              mine={mine}
            />
          )}
        </>
      )}
    </MainContainer>
  );
};

export default AuctionDetail;

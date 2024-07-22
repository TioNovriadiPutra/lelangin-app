import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import SwicthHeader from "@components/molecule/SwicthHeader";
import useAuctionController from "@controllers/auctionController";
import { useIsFocused } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { userAuctionsSelector } from "@models/auctionModel";
import SwitchContentList from "@components/molecule/SwitchContentList";

const Auction = () => {
  const userAuctions = useRecoilValue(userAuctionsSelector);

  const { getUserAuctionsService } = useAuctionController();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getUserAuctionsService();
    }
  }, [isFocused]);

  return (
    <MainContainer withPadding={false}>
      <SwicthHeader />

      <SwitchContentList listData={userAuctions} />
    </MainContainer>
  );
};

export default Auction;

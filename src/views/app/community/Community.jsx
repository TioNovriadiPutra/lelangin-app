import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import AppHeader from "@components/molecule/AppHeader";
import { communityHeader } from "@utils/constant/page";
import CommunityListSkeleton from "@components/skeleton/CommunityListSkeleton";
import { useRecoilValue } from "recoil";
import { communitiesSelector, communityIdState } from "@models/communityModel";
import useCommunityController from "@controllers/communityController";
import { useIsFocused } from "@react-navigation/native";
import CommunityList from "@components/molecule/CommunityList";
import AuctionListSkeleton from "@components/skeleton/AuctionListSkeleton";
import useAuctionController from "@controllers/auctionController";
import { auctionsSelector } from "@models/auctionModel";
import AuctionList from "@components/molecule/AuctionList";

const Community = () => {
  const communities = useRecoilValue(communitiesSelector);
  const communityId = useRecoilValue(communityIdState);
  const auctions = useRecoilValue(auctionsSelector);

  const isFocused = useIsFocused();

  const { getCommunitiesService } = useCommunityController();
  const { getAuctionsByCommunityService } = useAuctionController();

  useEffect(() => {
    if (isFocused) {
      getCommunitiesService();
    }
  }, [isFocused]);

  useEffect(() => {
    if (isFocused) {
      getAuctionsByCommunityService();
    }
  }, [isFocused, communityId]);

  return (
    <MainContainer containerStyles={styles.container}>
      <AppHeader headerData={communityHeader} />

      {communities.loading ? (
        <CommunityListSkeleton />
      ) : (
        <CommunityList listData={communities.data} />
      )}

      {auctions.loading ? (
        <AuctionListSkeleton />
      ) : (
        <AuctionList listData={auctions.data} />
      )}
    </MainContainer>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
});

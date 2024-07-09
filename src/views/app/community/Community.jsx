import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import AppHeader from "@components/molecule/AppHeader";
import { communityHeader } from "@utils/constant/page";
import CommunityListSkeleton from "@components/skeleton/CommunityListSkeleton";
import { useRecoilValue } from "recoil";
import { communitiesSelector } from "@models/communityModel";
import useCommunityController from "@controllers/communityController";
import { useIsFocused } from "@react-navigation/native";
import CommunityList from "@components/molecule/CommunityList";

const Community = () => {
  const communities = useRecoilValue(communitiesSelector);

  const isFocused = useIsFocused();

  const { getCommunitiesService } = useCommunityController();

  useEffect(() => {
    if (isFocused) {
      getCommunitiesService();
    }
  }, [isFocused]);

  return (
    <MainContainer containerStyles={styles.container}>
      <AppHeader headerData={communityHeader} />

      {communities.loading ? (
        <CommunityListSkeleton />
      ) : (
        <CommunityList listData={communities.data} />
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

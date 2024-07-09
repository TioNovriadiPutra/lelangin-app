import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import AppHeader from "@components/molecule/AppHeader";
import { homeHeader } from "@utils/constant/page";
import FloatingBanner from "@components/molecule/FloatingBanner";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import CategoryList from "@components/molecule/CategoryList";
import CategoryListSkeleton from "@components/skeleton/CategoryListSkeleton";
import useCategoryController from "@controllers/categoryController";
import { useIsFocused } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { categoriesSelector, categoryIdState } from "@models/categoryModel";
import useAuctionController from "@controllers/auctionController";
import { auctionsSelector } from "@models/auctionModel";
import AuctionListSkeleton from "@components/skeleton/AuctionListSkeleton";
import AuctionList from "@components/molecule/AuctionList";

const Home = () => {
  const categories = useRecoilValue(categoriesSelector);
  const auctions = useRecoilValue(auctionsSelector);
  const categoryId = useRecoilValue(categoryIdState);

  const isFocused = useIsFocused();

  const { getCategoriesService } = useCategoryController();
  const { getAuctionsByCategoryService } = useAuctionController();

  useEffect(() => {
    if (isFocused) {
      getCategoriesService();
    }
  }, [isFocused]);

  useEffect(() => {
    if (isFocused) {
      getAuctionsByCategoryService();
    }
  }, [isFocused, categoryId]);

  return (
    <MainContainer containerStyles={styles.container}>
      <AppHeader headerData={homeHeader} />

      <FloatingBanner />

      <Text style={styles.title}>Featured Item</Text>

      {categories.loading ? (
        <CategoryListSkeleton />
      ) : (
        <CategoryList listData={categories.data} />
      )}

      {auctions.loading ? (
        <AuctionListSkeleton />
      ) : (
        <AuctionList listData={auctions.data} />
      )}
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 20,
    color: colors.Title,
  },
});

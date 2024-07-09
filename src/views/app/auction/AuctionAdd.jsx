import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import AppForm from "@components/organism/AppForm";
import { addAuctionForm } from "@utils/constant/form";
import useCategoryController from "@controllers/categoryController";

const AuctionAdd = () => {
  const { getCategoriesService } = useCategoryController();

  useEffect(() => {
    getCategoriesService();
  }, []);

  return (
    <MainContainer>
      <AppForm formData={addAuctionForm} />
    </MainContainer>
  );
};

export default AuctionAdd;

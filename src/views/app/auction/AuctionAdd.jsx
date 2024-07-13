import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import AppForm from "@components/organism/AppForm";
import { addAuctionForm } from "@utils/constant/form";
import useCategoryController from "@controllers/categoryController";
import useAuctionController from "@controllers/auctionController";

const AuctionAdd = () => {
  const { getCategoriesDropdownService } = useCategoryController();
  const { addAuctionService } = useAuctionController();

  useEffect(() => {
    getCategoriesDropdownService();
  }, []);

  return (
    <MainContainer>
      <AppForm
        formData={addAuctionForm}
        onSubmit={(data) => addAuctionService(data)}
      />
    </MainContainer>
  );
};

export default AuctionAdd;

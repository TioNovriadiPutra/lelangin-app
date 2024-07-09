import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import AppForm from "@components/organism/AppForm";
import { addCommunityForm } from "@utils/constant/form";
import useCommunityController from "@controllers/communityController";

const CommunityAdd = () => {
  const { addCommunityService } = useCommunityController();

  return (
    <MainContainer>
      <AppForm
        formData={addCommunityForm}
        onSubmit={(data) => addCommunityService(data)}
      />
    </MainContainer>
  );
};

export default CommunityAdd;

const styles = StyleSheet.create({});

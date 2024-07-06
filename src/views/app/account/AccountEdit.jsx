import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import AppForm from "@components/organism/AppForm";
import { editAccountForm } from "@utils/constant/form";

const AccountEdit = () => {
  return (
    <MainContainer>
      <AppForm formData={editAccountForm} />
    </MainContainer>
  );
};

export default AccountEdit;

const styles = StyleSheet.create({});

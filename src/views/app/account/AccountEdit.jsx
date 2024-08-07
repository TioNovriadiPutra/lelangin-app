import React from "react";
import MainContainer from "@containers/MainContainer";
import AppForm from "@components/organism/AppForm";
import { editAccountForm } from "@utils/constant/form";
import useUserController from "@controllers/userController";

const AccountEdit = () => {
  const { updateUserProfileService } = useUserController();

  return (
    <MainContainer>
      <AppForm
        formData={editAccountForm}
        onSubmit={(data) => updateUserProfileService(data)}
      />
    </MainContainer>
  );
};

export default AccountEdit;

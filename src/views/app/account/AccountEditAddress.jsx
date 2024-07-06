import React from "react";
import MainContainer from "@containers/MainContainer";
import AppForm from "@components/organism/AppForm";
import { editAddressForm } from "@utils/constant/form";
import useUserController from "@controllers/userController";

const AccountEditAddress = () => {
  const { updateUserAddressService } = useUserController();

  return (
    <MainContainer>
      <AppForm
        formData={editAddressForm}
        onSubmit={(data) => updateUserAddressService(data)}
      />
    </MainContainer>
  );
};

export default AccountEditAddress;

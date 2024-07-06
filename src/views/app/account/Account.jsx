import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MainContainer from "@containers/MainContainer";
import useUserController from "@controllers/userController";
import { useRecoilValue } from "recoil";
import { userSelector } from "@models/userModel";
import UserProfileSkeleton from "@components/skeleton/UserProfileSkeleton";
import UserProfile from "@components/molecule/UserProfile";
import AccountMenu from "@components/molecule/AccountMenu";

const Account = () => {
  const user = useRecoilValue(userSelector);

  const { getUserProfileService } = useUserController();

  useEffect(() => {
    getUserProfileService();
  }, []);

  return (
    <MainContainer withPadding={false} containerStyles={styles.container}>
      {user.isLoading ? (
        <UserProfileSkeleton />
      ) : (
        <UserProfile profileData={user.data} />
      )}

      <AccountMenu />
    </MainContainer>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    paddingTop: 61,
    gap: 51,
  },
});

import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import AuthForm from "@components/organism/AuthForm";
import { registerForm } from "@utils/constant/form";
import useAuthController from "@controllers/authController";

const Register = () => {
  const { registerService } = useAuthController();

  return (
    <MainContainer containerStyles={styles.container}>
      <AuthForm authFormData={registerForm} onSubmit={registerService} />
    </MainContainer>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: 61,
  },
});

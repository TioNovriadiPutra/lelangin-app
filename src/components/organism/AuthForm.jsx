import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Form from "@components/molecule/Form";
import { useForm } from "react-hook-form";
import FormFooter from "@components/molecule/FormFooter";
import LelanginButton from "@components/atom/LelanginButton";

const AuthForm = ({ authFormData, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: authFormData.defaultValues,
  });

  return (
    <View style={[styles.container, !authFormData.withFooter && { flex: 1 }]}>
      <Text style={styles.title}>{authFormData.title}</Text>

      <Form formData={authFormData.inputs} control={control} />

      {authFormData.withFooter && <FormFooter />}

      <LelanginButton
        buttonData={authFormData.buttonData}
        buttonStyles={styles.button}
        onPress={handleSubmit((data) => onSubmit(data))}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    gap: 45,
    marginBottom: 34,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.SemiBold,
    fontSize: 36,
    color: colors.Black,
  },
  button: {
    width: 184,
  },
});

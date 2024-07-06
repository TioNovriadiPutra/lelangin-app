import { StyleSheet, View } from "react-native";
import React from "react";
import AppHeader from "@components/molecule/AppHeader";
import { useForm } from "react-hook-form";
import Form from "@components/molecule/Form";

const AppForm = ({ formData }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });

  return (
    <View style={styles.container}>
      <AppHeader headerData={formData.headerData} />

      <Form formData={formData.inputs} control={control} />
    </View>
  );
};

export default AppForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

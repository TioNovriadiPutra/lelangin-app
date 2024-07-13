import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import DetailHeader from "@components/molecule/DetailHeader";
import DetailDescription from "@components/molecule/DetailDescription";

const DetailContent = ({ contentData }) => {
  return (
    <ScrollView>
      <DetailHeader headerData={contentData.header} />

      <DetailDescription descriptionData={contentData.content} />
    </ScrollView>
  );
};

export default DetailContent;

const styles = StyleSheet.create({});

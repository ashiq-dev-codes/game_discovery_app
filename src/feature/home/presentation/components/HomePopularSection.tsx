import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomePopularSection = () => {
  return (
    <View style={styles.popularBox}>
      <View style={styles.popularBoxHeader}>
        <Text style={styles.popularBoxHeaderTitle}>Popular</Text>
        <Text style={styles.popularBoxHeaderSeeAll}>See All</Text>
      </View>
      <View style={styles.popularBoxContent}></View>
    </View>
  );
};

export default HomePopularSection;

const styles = StyleSheet.create({
  popularBox: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  popularBoxHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popularBoxHeaderTitle: {
    fontSize: 24,
    color: AppColors.blackColor,
    fontFamily: AppFonts.poppinsBold.name,
  },
  popularBoxHeaderSeeAll: {
    fontSize: 16,
    color: AppColors.skyBlueColor,
    fontFamily: AppFonts.nunitoBold.name,
  },
  popularBoxContent: {
    marginTop: 10,
  },
});

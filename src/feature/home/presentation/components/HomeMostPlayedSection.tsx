import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeMostPlayedSection = () => {
  return (
    <View style={styles.mostPlayedBox}>
      <View style={styles.mostPlayedBoxHeader}>
        <Text style={styles.mostPlayedBoxHeaderTitle}>Most Played</Text>
        <Text style={styles.mostPlayedBoxHeaderSeeAll}>See All</Text>
      </View>
      <View style={styles.mostPlayedContent}>
        <Text>HomeMostPlayedSection</Text>
      </View>
    </View>
  );
};

export default HomeMostPlayedSection;

const styles = StyleSheet.create({
  mostPlayedBox: {
    marginTop: 22,
  },
  mostPlayedBoxHeader: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  mostPlayedBoxHeaderTitle: {
    fontSize: 24,
    color: AppColors.blackColor,
    fontFamily: AppFonts.poppinsBold.name,
  },
  mostPlayedBoxHeaderSeeAll: {
    fontSize: 16,
    color: AppColors.skyBlueColor,
    fontFamily: AppFonts.nunitoBold.name,
  },
  mostPlayedContent: {
    marginTop: 10,
  },
});

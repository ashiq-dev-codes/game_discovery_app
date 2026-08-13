import AppImages from "@/src/shared/path/appImages";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import homePagestyles from "../style/homePage.styles";

const HomePage = () => {
  return (
    <SafeAreaView style={homePagestyles.container} edges={["top"]}>
      <View style={homePagestyles.appBar}>
        <View style={homePagestyles.appBarHeadingBox}>
          <Text style={homePagestyles.appBarHeadingBoxText}>StoryVerse</Text>
        </View>
        <Image
          style={homePagestyles.appBarImage}
          source={AppImages.splashImg1}
        />
      </View>
      <Text>HomePage</Text>
    </SafeAreaView>
  );
};

export default HomePage;

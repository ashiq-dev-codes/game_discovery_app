import AppImages from "@/src/shared/path/appImages";
import React from "react";
import { Image, Text, View } from "react-native";
import splashPageStyles from "../style/splashPage.styles";

const SplashPage = () => {
  return (
    <View style={splashPageStyles.container}>
      <Image style={splashPageStyles.image} source={AppImages.splashImg1} />

      <Text style={splashPageStyles.text}>StoryVerse</Text>
    </View>
  );
};

export default SplashPage;

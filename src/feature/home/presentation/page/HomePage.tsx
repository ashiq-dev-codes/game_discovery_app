import AppImages from "@/src/shared/path/appImages";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import homePagestyles from "../style/homePage.styles";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={homePagestyles.container} edges={["top"]}>
      {/* Home AppBar */}
      <View style={homePagestyles.appBar}>
        <View style={homePagestyles.appBarHeadingBox}>
          <Text style={homePagestyles.appBarHeadingBoxText}>StoryVerse</Text>
        </View>
        <Image
          style={homePagestyles.appBarImage}
          source={AppImages.splashImg1}
        />
      </View>

      {/* Home Heading */}
      <Text style={homePagestyles.homeHeading}>
        Discover Your Next Adventure
      </Text>

      {/* Home Search Bar */}
      <View style={homePagestyles.searchBar}>
        <TextInput
          value={searchQuery}
          placeholder="Search by title..."
          placeholderTextColor="#9EA5B1"
          style={homePagestyles.searchInput}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Ionicons name="search-outline" size={20} color="#5B96E1" />
      </View>

      <Text>HomePage</Text>
    </SafeAreaView>
  );
};

export default HomePage;

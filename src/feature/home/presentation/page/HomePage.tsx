import DismissKeyboardView from "@/src/shared/components/DismissKeyboardView";
import AppImages from "@/src/shared/path/appImages";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import homePagestyles from "../style/homePage.styles";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <DismissKeyboardView>
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
        <Pressable
          style={homePagestyles.searchBar}
          onPress={() => inputRef.current?.focus()}
        >
          <TextInput
            ref={inputRef}
            value={searchQuery}
            placeholder="Search by title..."
            placeholderTextColor="#9EA5B1"
            style={homePagestyles.searchInput}
            onChangeText={(text) => setSearchQuery(text)}
          />

          {searchQuery.length > 0 ? (
            <Pressable onPress={handleClearSearch} hitSlop={10}>
              <Ionicons name="close-circle" size={20} color="#5B96E1" />
            </Pressable>
          ) : (
            <Ionicons name="search-outline" size={20} color="#5B96E1" />
          )}
        </Pressable>

        {/* Home Popular */}
        <View style={homePagestyles.popularBox}>
          <Text style={homePagestyles.popularBoxHeaderTitle}>Popular</Text>
          <Text style={homePagestyles.popularBoxHeaderSeeAll}>See All</Text>
        </View>

        <Text>HomePage</Text>
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default HomePage;

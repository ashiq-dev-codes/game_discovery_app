import AppFonts from "@/src/shared/path/appFonts";
import AppImages from "@/src/shared/path/appImages";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface CardItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  isFavorite: boolean;
}

const POPULAR_DATA: CardItem[] = [
  {
    id: "1",
    title: "The Last Of Us Part I",
    image: AppImages.popularGame1, // Replace with your image paths
    isFavorite: false,
  },
  {
    id: "2",
    title: "The Last Of Us Part II",
    image: AppImages.popularGame2,
    isFavorite: true,
  },
  {
    id: "3",
    title: "Uncharted 4",
    image: AppImages.popularGame3,
    isFavorite: false,
  },
];

const HomePopularSection = () => {
  const renderItem = ({ item, index }: { item: CardItem; index: number }) => {
    return (
      <View>
        <ImageBackground
          source={item.image}
          style={styles.cardContainer}
          imageStyle={{ borderRadius: 18 }}
        >
          <View style={styles.heartIcon}>
            <Ionicons
              name="heart"
              size={18}
              color={item.isFavorite ? "#FF4B4B" : "#FFFFFF"}
            />
          </View>
          <View style={styles.titleCard}>
            <Text style={styles.titleCardText}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.popularBox}>
      <View style={styles.popularBoxHeader}>
        <Text style={styles.popularBoxHeaderTitle}>Popular</Text>
        <Text style={styles.popularBoxHeaderSeeAll}>See All</Text>
      </View>
      <View style={styles.popularBoxContent}>
        <FlatList
          horizontal
          data={POPULAR_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default HomePopularSection;

const styles = StyleSheet.create({
  popularBox: {
    marginTop: 20,
  },
  popularBoxHeader: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 30,
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
  listContainer: {
    gap: 16,
    paddingHorizontal: 30,
  },
  cardContainer: {
    flex: 1,
    width: 170,
    padding: 8,
    height: 240,
    borderWidth: 2,
    borderRadius: 18,
    borderColor: "transparent",
    justifyContent: "space-between",
  },
  heartIcon: {
    alignItems: "flex-end",
  },
  titleCard: {
    padding: 9,
    elevation: 6,
    shadowRadius: 16,
    borderRadius: 16,
    shadowOpacity: 0.55,
    alignItems: "center",
    shadowColor: AppColors.whiteColor,
    shadowOffset: { width: 0, height: 4 },
    backgroundColor: AppColors.whiteColor,
  },
  titleCardText: {
    fontSize: 12,
    color: AppColors.blackColor,
    fontFamily: AppFonts.nunitoBold.name,
  },
});

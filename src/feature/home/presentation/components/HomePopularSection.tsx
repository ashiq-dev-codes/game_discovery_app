import { PopularGameModel } from "@/src/core/model/popular/popularGame.model";
import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { usePopularGamesStore } from "../store/usePopularGames.store";

const CARD_HEIGHT = 240;

const HomePopularSection = () => {
  const games = usePopularGamesStore((state) => state.games);
  const toggleFavorite = usePopularGamesStore((state) => state.toggleFavorite);

  const renderItem = ({
    item,
    index,
  }: {
    item: PopularGameModel;
    index: number;
  }) => {
    return (
      <View>
        <ImageBackground
          source={item.image}
          style={styles.cardContainer}
          imageStyle={{ borderRadius: 18 }}
        >
          <View style={styles.heartIcon}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => toggleFavorite(item.id)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons
                name="heart"
                size={18}
                color={item.isFavorite ? "#FF4B4B" : "#FFFFFF"}
              />
            </TouchableOpacity>
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
          data={games}
          style={styles.list}
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
  list: {
    height: CARD_HEIGHT,
  },
  listContainer: {
    gap: 16,
    paddingHorizontal: 18,
  },
  cardContainer: {
    flex: 1,
    width: 170,
    padding: 8,
    borderWidth: 2,
    borderRadius: 18,
    height: CARD_HEIGHT,
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

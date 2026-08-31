import { PopularGameModel } from "@/src/core/model/popular/popularGame.model";
import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { PopularGamesStatus } from "../store/usePopularGames.state";
import { usePopularGamesStore } from "../store/usePopularGames.store";

const CARD_HEIGHT = 240;

const HomePopularSection = () => {
  const games = usePopularGamesStore((state) => state.games);
  const status = usePopularGamesStore((state) => state.status);
  const fetchGames = usePopularGamesStore((state) => state.fetchGames);
  const errorMessage = usePopularGamesStore((state) => state.errorMessage);
  const toggleFavorite = usePopularGamesStore((state) => state.toggleFavorite);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

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

  const renderContent = () => {
    if (
      status === PopularGamesStatus.Loading ||
      status === PopularGamesStatus.Initial
    ) {
      return (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="large" color={AppColors.skyBlueColor} />
        </View>
      );
    }

    if (status === PopularGamesStatus.Failure) {
      return (
        <View style={styles.stateContainer}>
          <Text style={styles.errorText}>
            {errorMessage ?? "Something went wrong"}
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={fetchGames}>
            <Text style={styles.retryText}>Tap to retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (games.length === 0) {
      return (
        <View style={styles.stateContainer}>
          <Text style={styles.emptyText}>No popular games found</Text>
        </View>
      );
    }

    return (
      <FlatList
        horizontal
        data={games}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    );
  };

  return (
    <View style={styles.popularBox}>
      <View style={styles.popularBoxHeader}>
        <Text style={styles.popularBoxHeaderTitle}>Popular</Text>
        <Text style={styles.popularBoxHeaderSeeAll}>See All</Text>
      </View>
      <View style={styles.popularBoxContent}>{renderContent()}</View>
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
  stateContainer: {
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  errorText: {
    fontSize: 14,
    textAlign: "center",
    color: AppColors.error600,
    fontFamily: AppFonts.nunitoBold.name,
  },
  retryText: {
    fontSize: 14,
    marginTop: 10,
    color: AppColors.skyBlueColor,
    fontFamily: AppFonts.nunitoBold.name,
  },
  emptyText: {
    fontSize: 14,
    color: AppColors.gray600,
    fontFamily: AppFonts.nunitoBold.name,
  },
});

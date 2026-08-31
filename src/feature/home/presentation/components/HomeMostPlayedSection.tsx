import { MostPlayedGameModel } from "@/src/core/model/mostPlayed/mostPlayedGame.model";
import AppFonts from "@/src/shared/path/appFonts";
import AppImages from "@/src/shared/path/appImages";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MOST_PLAYED_GAMES: MostPlayedGameModel[] = [
  {
    id: "1",
    title: "Uncharted 4: A Thief's End",
    image: AppImages.mostPlayedGame1,
    rating: 4.9,
    developer: "Naughty Dog",
    duration: "15–18 hrs",
  },
  {
    id: "2",
    title: "The Witcher: Wild Hunt",
    image: AppImages.mostPlayedGame2,
    rating: 4.9,
    developer: "CD Projekt Red",
    duration: "50–100+ hrs",
  },
  {
    id: "3",
    title: "God Of War Ragnarök",
    image: AppImages.mostPlayedGame3,
    rating: 4.9,
    developer: "Santa Monica Studio",
    duration: "25–35 hrs",
  },
];

const HomeMostPlayedSection = () => {
  const router = useRouter();

  const renderItem = (item: MostPlayedGameModel) => (
    <TouchableOpacity
      key={item.id}
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => router.push(`/product/${item.id}`)}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color="#F7B500" />
          <Text style={styles.metaText}>
            {item.rating.toFixed(1)} • {item.developer}
          </Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="time-outline" size={14} color={AppColors.gray600} />
          <Text style={styles.metaText}>{item.duration}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.playButton}
        onPress={() => router.push(`/product/${item.id}`)}
      >
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mostPlayedBox}>
      <View style={styles.mostPlayedBoxHeader}>
        <Text style={styles.mostPlayedBoxHeaderTitle}>Most Played</Text>
        <Text style={styles.mostPlayedBoxHeaderSeeAll}>See All</Text>
      </View>
      <View style={styles.mostPlayedContent}>
        {MOST_PLAYED_GAMES.map(renderItem)}
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
    gap: 14,
    marginTop: 14,
    paddingHorizontal: 18,
  },
  card: {
    padding: 8,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: AppColors.whiteColor,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 2,
        spreadDistance: 2,
        color: AppColors.withOpacity(AppColors.blackColor, 0.04),
      },
    ],
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  cardInfo: {
    gap: 6,
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 12,
    color: AppColors.blackColor,
    fontFamily: AppFonts.nunitoBold.name,
  },
  metaRow: {
    gap: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  metaText: {
    fontSize: 12,
    color: AppColors.gray600,
    fontFamily: AppFonts.nunitoSemiBold.name,
  },
  playButton: {
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: AppColors.primaryColor,
  },
  playButtonText: {
    fontSize: 14,
    color: AppColors.whiteColor,
    fontFamily: AppFonts.nunitoSemiBold.name,
  },
});

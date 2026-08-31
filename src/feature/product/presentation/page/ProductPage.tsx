import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ProductInfoRow from "../components/ProductInfoRow";
import { GameDetailStatus } from "../store/useGameDetail.state";
import { useGameDetailStore } from "../store/useGameDetail.store";
import productPageStyles from "../style/productPage.styles";

const ProductPage = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  const game = useGameDetailStore((state) => state.game);
  const status = useGameDetailStore((state) => state.status);
  const errorMessage = useGameDetailStore((state) => state.errorMessage);
  const fetchGameDetail = useGameDetailStore((state) => state.fetchGameDetail);
  const toggleWishlist = useGameDetailStore((state) => state.toggleWishlist);

  useEffect(() => {
    if (id) {
      fetchGameDetail(id);
    }
  }, [id, fetchGameDetail]);

  if (
    status === GameDetailStatus.Loading ||
    status === GameDetailStatus.Initial
  ) {
    return (
      <SafeAreaView style={productPageStyles.container}>
        <View style={productPageStyles.stateContainer}>
          <ActivityIndicator size="large" color={AppColors.skyBlueColor} />
        </View>
      </SafeAreaView>
    );
  }

  if (status === GameDetailStatus.Failure || !game) {
    return (
      <SafeAreaView style={productPageStyles.container}>
        <View style={productPageStyles.stateContainer}>
          <Text style={productPageStyles.errorText}>
            {errorMessage ?? "Unable to load game details"}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => id && fetchGameDetail(id)}
          >
            <Text style={productPageStyles.retryText}>Tap to retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={productPageStyles.container} edges={["bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={productPageStyles.scrollContent}
      >
        <View style={productPageStyles.coverContainer}>
          <Image
            source={game.coverImage}
            style={productPageStyles.coverImage}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            style={[productPageStyles.backButton, { top: insets.top }]}
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color={AppColors.whiteColor}
            />
          </TouchableOpacity>
        </View>

        <View style={productPageStyles.content}>
          <Text style={productPageStyles.title}>{game.title}</Text>

          <View style={productPageStyles.metaRow}>
            <Ionicons name="star" size={16} color="#F7B500" />
            <Text style={productPageStyles.metaText}>
              {game.rating.toFixed(1)} •
            </Text>
            <Ionicons
              name="game-controller"
              size={16}
              color={AppColors.gray600}
            />
            <Text style={productPageStyles.metaText}>{game.developer} •</Text>
            <Ionicons name="time-outline" size={16} color={AppColors.gray600} />
            <Text style={productPageStyles.metaText}>{game.duration}</Text>
          </View>

          <Text style={productPageStyles.sectionHeading}>About</Text>
          <Text style={productPageStyles.description}>{game.description}</Text>

          <View style={productPageStyles.infoCard}>
            <ProductInfoRow
              icon="apps"
              title="Genre"
              subtitle={game.genres.join(" • ")}
            />
            <View style={productPageStyles.divider} />
            <ProductInfoRow
              icon="logo-playstation"
              title="Platform"
              subtitle={game.platforms.join(" • ")}
            />
          </View>
        </View>
      </ScrollView>

      <View style={productPageStyles.actionBar}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleWishlist}
          style={productPageStyles.wishlistButton}
        >
          <Text style={productPageStyles.wishlistButtonText}>
            {game.isWishlisted ? "Wishlisted" : "Wishlist"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={productPageStyles.playButton}
        >
          <Text style={productPageStyles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductPage;

import AppImages from "@/src/shared/path/appImages";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { router } from "expo-router";
import splashPageStyles from "../style/splashPage.styles";

const SplashPage = () => {
  const fadeAnim = useSharedValue(0);
  const scaleAnim = useSharedValue(0.8);
  const pulseAnim = useSharedValue(1);

  useEffect(() => {
    // Fade in and scale up animation
    fadeAnim.value = withTiming(1, { duration: 800, easing: Easing.out(Easing.exp) });
    scaleAnim.value = withTiming(1, { duration: 800, easing: Easing.out(Easing.back(1.5)) });

    // Pulse animation for the button
    pulseAnim.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 800 }),
        withTiming(1, { duration: 800 })
      ),
      -1,
      true
    );

    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ scale: scaleAnim.value }],
  }));

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseAnim.value }],
  }));

  return (
    <View style={splashPageStyles.container}>
      <Image style={splashPageStyles.image} source={AppImages.splashImg1} />

      <Animated.Text style={[splashPageStyles.text, textAnimatedStyle]}>
        StoryVerse
      </Animated.Text>

      <Animated.View style={[splashPageStyles.button, buttonAnimatedStyle]}>
        <Text style={splashPageStyles.buttonText}>Start</Text>
      </Animated.View>
    </View>
  );
};

export default SplashPage;

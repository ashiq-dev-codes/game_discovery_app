import AppImages from "@/src/shared/path/appImages";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, Pressable, Text } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import splashPageStyles from "../style/splashPage.styles";

const SplashPage = () => {
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(30);
  const buttonOpacity = useSharedValue(0);
  const buttonScale = useSharedValue(0.9);

  useEffect(() => {
    // Text: Fade in + slide up
    textOpacity.value = withDelay(300, withTiming(1, { duration: 600 }));
    textTranslateY.value = withDelay(
      300,
      withTiming(0, { duration: 600, easing: Easing.out(Easing.cubic) }),
    );

    // Button: Fade in + continuous pulse
    buttonOpacity.value = withDelay(800, withTiming(1, { duration: 500 }));
    buttonScale.value = withDelay(
      800,
      withSequence(
        withTiming(1, { duration: 500 }),
        withRepeat(
          withSequence(
            withTiming(1.05, {
              duration: 800,
              easing: Easing.inOut(Easing.ease),
            }),
            withTiming(1, { duration: 800, easing: Easing.inOut(Easing.ease) }),
          ),
          -1,
          true,
        ),
      ),
    );
  }, []);

  const handleStartPress = () => {
    router.replace("/home");
  };

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
    transform: [{ scale: buttonScale.value }],
  }));

  return (
    <Animated.View style={splashPageStyles.container}>
      <Image style={splashPageStyles.image} source={AppImages.splashImg1} />

      <Animated.View style={splashPageStyles.body}>
        <Animated.Text style={[splashPageStyles.text, textStyle]}>
          StoryVerse
        </Animated.Text>

        <Animated.View style={[splashPageStyles.button, buttonStyle]}>
          <Pressable onPress={handleStartPress}>
            <Text style={splashPageStyles.buttonText}>Start</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashPage;

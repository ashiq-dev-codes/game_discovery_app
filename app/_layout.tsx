import AppFonts from "@/src/shared/path/appFonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Oleo Script Swash Caps
    [AppFonts.oleoScriptSwashCapsBold.name]:
      AppFonts.oleoScriptSwashCapsBold.path,
    [AppFonts.oleoScriptSwashCapsRegular.name]:
      AppFonts.oleoScriptSwashCapsRegular.path,

    // Nunito
    [AppFonts.nunitoExtraLight.name]: AppFonts.nunitoExtraLight.path,
    [AppFonts.nunitoLight.name]: AppFonts.nunitoLight.path,
    [AppFonts.nunitoRegular.name]: AppFonts.nunitoRegular.path,
    [AppFonts.nunitoMedium.name]: AppFonts.nunitoMedium.path,
    [AppFonts.nunitoSemiBold.name]: AppFonts.nunitoSemiBold.path,
    [AppFonts.nunitoBold.name]: AppFonts.nunitoBold.path,
    [AppFonts.nunitoExtraBold.name]: AppFonts.nunitoExtraBold.path,
    [AppFonts.nunitoBlack.name]: AppFonts.nunitoBlack.path,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

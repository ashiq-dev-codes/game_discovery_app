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
    [AppFonts.nunitoBold.name]: AppFonts.nunitoBold.path,
    [AppFonts.nunitoRegular.name]: AppFonts.nunitoRegular.path,
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

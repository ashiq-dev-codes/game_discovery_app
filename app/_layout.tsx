import AppFonts from "@/src/shared/path/appFonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    [AppFonts.oleoScriptSwashCapsBold.name]: AppFonts.oleoScriptSwashCapsBold.path,
    [AppFonts.oleoScriptSwashCapsRegular.name]: AppFonts.oleoScriptSwashCapsRegular.path,
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

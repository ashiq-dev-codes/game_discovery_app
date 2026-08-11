// Centralized font definitions — single source of truth for the app.
// Add new font families here as you download .ttf files into assets/fonts/.

const AppFonts = {
    oleoScriptSwashCapsBold: {
        name: "oleoScriptSwashCapsBold",
        path: require("../../../assets/fonts/OleoScriptSwashCaps-Bold.ttf"),
    },
    oleoScriptSwashCapsRegular: {
        name: "oleoScriptSwashCapsRegular",
        path: require("../../../assets/fonts/OleoScriptSwashCaps-Regular.ttf"),
    },
} as const;

export default AppFonts;

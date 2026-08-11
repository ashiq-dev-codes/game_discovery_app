// Centralized font definitions — single source of truth for the app.
// Add new font families here as you download .ttf files into assets/fonts/.

const AppFonts = {
    // Oleo Script Swash Caps
    oleoScriptSwashCapsBold: {
        name: "oleoScriptSwashCapsBold",
        path: require("../../../assets/fonts/OleoScriptSwashCaps-Bold.ttf"),
    },
    oleoScriptSwashCapsRegular: {
        name: "oleoScriptSwashCapsRegular",
        path: require("../../../assets/fonts/OleoScriptSwashCaps-Regular.ttf"),
    },

    // Nunito
    nunitoRegular: {
        name: "nunitoRegular",
        path: require("../../../assets/fonts/Nunito-Regular.ttf"),
    },
    nunitoBold: {
        name: "nunitoBold",
        path: require("../../../assets/fonts/Nunito-Bold.ttf"),
    },
} as const;

export default AppFonts;

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
    nunitoExtraLight: {
        name: "nunitoExtraLight",
        path: require("../../../assets/fonts/Nunito-ExtraLight.ttf"),
    },
    nunitoLight: {
        name: "nunitoLight",
        path: require("../../../assets/fonts/Nunito-Light.ttf"),
    },
    nunitoRegular: {
        name: "nunitoRegular",
        path: require("../../../assets/fonts/Nunito-Regular.ttf"),
    },
    nunitoMedium: {
        name: "nunitoMedium",
        path: require("../../../assets/fonts/Nunito-Medium.ttf"),
    },
    nunitoSemiBold: {
        name: "nunitoSemiBold",
        path: require("../../../assets/fonts/Nunito-SemiBold.ttf"),
    },
    nunitoBold: {
        name: "nunitoBold",
        path: require("../../../assets/fonts/Nunito-Bold.ttf"),
    },
    nunitoExtraBold: {
        name: "nunitoExtraBold",
        path: require("../../../assets/fonts/Nunito-ExtraBold.ttf"),
    },
    nunitoBlack: {
        name: "nunitoBlack",
        path: require("../../../assets/fonts/Nunito-Black.ttf"),
    },
} as const;

export default AppFonts;

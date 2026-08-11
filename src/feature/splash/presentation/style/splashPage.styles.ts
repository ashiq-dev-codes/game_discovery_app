import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";


const splashPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "relative",
    },
    text: {
        fontSize: 80,
        position: "absolute",
        paddingHorizontal: 20,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.oleoScriptSwashCapsRegular.name,
    },
    button: {
        height: 60,
        width: 262,
        bottom: 85,
        borderRadius: 16,
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
        backgroundColor: AppColors.primaryColor,
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: AppColors.whiteColor,
        fontFamily: AppFonts.nunitoBold.name,
    },
});

export default splashPageStyles;